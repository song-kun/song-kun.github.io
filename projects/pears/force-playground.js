(() => {
  'use strict';

  const root = document.querySelector('#force-playground');
  if (!root) return;

  const find = (id) => root.querySelector(`#${id}`);
  const lab = root.querySelector('.force-lab');
  const playButton = find('force-play');
  const progressInput = find('force-progress');
  const choiceInput = find('force-choice');
  const episodeButtons = [...root.querySelectorAll('[data-force-episode]')];
  const modeButtons = [...root.querySelectorAll('[data-force-mode]')];
  const episodeForces = [2, 9, 6];
  const pathPoints = [[138, 142], [574, 142], [574, 213], [138, 213], [138, 279], [574, 279]];
  const pathLengths = pathPoints.slice(1).map((point, i) => Math.hypot(point[0] - pathPoints[i][0], point[1] - pathPoints[i][1]));
  const pathLength = pathLengths.reduce((sum, length) => sum + length, 0);
  const episodeDuration = 8500;
  const slipAt = 0.44;
  let mode = 'guided';
  let time = 0;
  let chosenForce = 6;
  let playing = false;
  let animationFrame = null;
  let lastTick = null;
  let narrativeKey = '';

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const forceLabel = (force) => `${Number(force.toFixed(1))} N`;
  const outcomeFor = (force) => force < 5 ? 'low' : force > 8 ? 'high' : 'success';
  const totalTime = () => mode === 'guided' ? 300 : 100;
  const setText = (id, value) => {
    const element = find(id);
    if (element.textContent !== value) element.textContent = value;
  };

  // Rebuild the covered path from absolute progress so backward scrubbing
  // restores exactly the same ink, rather than accumulating erase operations.
  function samplePath(progress) {
    let remaining = clamp(progress) * pathLength;
    let point = pathPoints[0];
    let path = `M ${point[0]} ${point[1]}`;
    for (let i = 0; i < pathLengths.length; i += 1) {
      const fraction = clamp(remaining / pathLengths[i]);
      point = [
        pathPoints[i][0] + (pathPoints[i + 1][0] - pathPoints[i][0]) * fraction,
        pathPoints[i][1] + (pathPoints[i + 1][1] - pathPoints[i][1]) * fraction,
      ];
      path += ` L ${point[0].toFixed(2)} ${point[1].toFixed(2)}`;
      remaining -= pathLengths[i];
      if (remaining <= 0) break;
    }
    return { x: point[0], y: point[1], path };
  }

  function frameState() {
    const episode = mode === 'guided' ? Math.min(2, Math.floor(time / 100)) : 0;
    const progress = clamp((time - episode * 100) / 100);
    const force = mode === 'guided' ? episodeForces[episode] : chosenForce;
    const outcome = outcomeFor(force);
    const wipe = clamp((progress - 0.12) / 0.64);
    const slipped = outcome === 'high' && wipe >= slipAt;
    const complete = progress >= 0.84;
    const phase = complete ? 'Result' : progress === 0 ? 'Ready' : progress < 0.12 ? 'Approach' : progress < 0.76 ? (slipped ? 'Eraser slipped' : 'Wiping') : 'Release';
    return { episode, progress, force, outcome, wipe, slipped, complete, phase };
  }

  function renderScene(state) {
    const { progress, force, outcome, wipe, slipped, complete } = state;
    const position = samplePath(wipe);
    const covered = samplePath(outcome === 'high' ? Math.min(slipAt, wipe) : wipe);
    const opacity = outcome === 'low' ? (force / 5) * 0.65 : 1;
    const trail = find('force-wipe-trail');
    trail.setAttribute('d', covered.path);
    trail.setAttribute('opacity', wipe > 0 ? opacity.toFixed(3) : '0');

    const approachLift = (1 - clamp(progress / 0.12)) * 31;
    const releaseLift = clamp((progress - 0.76) / 0.08) * 31;
    const y = position.y - approachLift - releaseLift;
    const elbowX = 390 + position.x * 0.28;
    const elbowY = 30 + position.y * 0.08;
    const armPath = `M 659 8 L ${elbowX} ${elbowY} L ${position.x} ${y - 66}`;
    find('force-arm-outline').setAttribute('d', armPath);
    find('force-arm-inner').setAttribute('d', armPath);
    for (const id of ['force-elbow', 'force-elbow-core']) {
      find(id).setAttribute('cx', elbowX);
      find(id).setAttribute('cy', elbowY);
    }
    find('force-eraser').setAttribute('transform', `translate(${position.x.toFixed(2)} ${y.toFixed(2)})`);
    find('force-contact-shadow').setAttribute('opacity', slipped ? '0' : '0.12');

    const slip = samplePath(slipAt);
    const slipFraction = clamp((wipe - slipAt) / 0.055);
    find('force-pad').setAttribute('transform', slipped
      ? `translate(${slip.x - position.x + 35 * slipFraction} ${slip.y - y + 24 * slipFraction}) rotate(${24 * slipFraction})`
      : 'translate(0 0)');
    find('force-slip-mark').setAttribute('opacity', slipped ? '0.9' : '0');
    find('force-slip-mark').setAttribute('transform', `translate(${slip.x - 510} ${slip.y - 215})`);

    const descriptions = {
      low: ['Residual marks remain.', '#f4ead9', '#916126'],
      high: ['Grip lost. Wipe incomplete.', '#f7e4de', '#a7473a'],
      success: ['Clean board. Stable contact.', '#e1f0e9', '#23664f'],
    };
    const [label, background, color] = descriptions[outcome];
    const stamp = find('force-result-stamp');
    stamp.setAttribute('opacity', complete ? '1' : '0');
    stamp.querySelector('rect').setAttribute('fill', background);
    find('force-result-text').setAttribute('fill', color);
    setText('force-result-text', label);
    const visual = complete
      ? { low: 'Residual ink remains', high: 'Eraser slipped', success: 'Clean board' }[outcome]
      : slipped ? 'Eraser slipped' : wipe > 0 ? 'Wiping in progress' : 'Ready to wipe';
    setText('force-visual', visual);
  }

  function renderNarrative(state) {
    const { episode, force, outcome, complete, phase } = state;
    const key = `${mode}-${episode}-${force}-${complete ? 'complete' : phase === 'Ready' ? 'ready' : 'running'}`;
    if (key === narrativeKey) return;
    narrativeKey = key;
    find('force-reason-detail').hidden = !complete;
    if (!complete) {
      setText('force-diagnosis', phase === 'Ready' ? (episode === 0 ? 'Start with a hypothesis.' : 'Test the next hypothesis.') : 'Observe the interaction.');
      setText('force-evidence', phase === 'Ready'
        ? `Try ${forceLabel(force)} and observe what the wiping pass leaves behind.`
        : `The contact target stays at ${forceLabel(force)} for this rollout. Judge the outcome before updating the force.`);
      return;
    }
    const narratives = {
      low: {
        title: 'Too little force.',
        evidence: 'A full wiping pass leaves visible marker traces on the board.',
        prior: 'Residual ink after a complete pass suggests insufficient normal contact force.',
        update: mode === 'guided' ? 'Test a higher force: 2 N → 9 N.' : 'Increase the force for the next attempt.',
      },
      high: {
        title: 'Too much force.',
        evidence: 'The eraser slips out of the gripper, leaving the wiping path incomplete.',
        prior: 'Excessive normal force can dislodge the eraser. More pressure does not guarantee a better wipe.',
        update: mode === 'guided' ? 'Reduce and refine: 9 N → 6 N.' : 'Reduce the force for the next attempt.',
      },
      success: {
        title: 'The right contact.',
        evidence: 'The marks are removed and the eraser stays securely grasped.',
        prior: 'Enough pressure removes the ink; a stable grasp keeps the wiping motion effective.',
        update: `Keep this force setting: ${forceLabel(force)}.`,
      },
    };
    const narrative = narratives[outcome];
    setText('force-diagnosis', narrative.title);
    setText('force-evidence', narrative.evidence);
    setText('force-prior', narrative.prior);
    setText('force-update', narrative.update);
  }

  function render() {
    const state = frameState();
    lab.dataset.mode = mode;
    lab.dataset.outcome = state.outcome;
    lab.dataset.phase = state.phase;
    lab.dataset.episode = String(state.episode + 1);
    modeButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.forceMode === mode)));
    episodeButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === state.episode)));
    root.querySelector('.force-episodes').hidden = mode !== 'guided';
    root.querySelector('.force-custom').hidden = mode !== 'custom';
    setText('force-scene-label', mode === 'guided' ? `Rollout 0${state.episode + 1} / 03` : 'Your own force');
    setText('force-phase', state.phase);
    setText('force-target', forceLabel(state.force));
    const reading = find('force-reading');
    const readingNumber = String(Number(state.force.toFixed(1)));
    if (reading.firstChild.textContent !== `${readingNumber} `) reading.firstChild.textContent = `${readingNumber} `;
    find('force-meter-pointer').style.left = `${state.force / 12 * 100}%`;
    setText('force-choice-value', forceLabel(chosenForce));
    choiceInput.disabled = playing;
    progressInput.max = totalTime();
    progressInput.value = time;
    const percent = Math.round(state.progress * 100);
    const timeLabel = `${mode === 'guided' ? `Rollout ${state.episode + 1}` : 'Your rollout'} · ${percent}%`;
    setText('force-progress-text', timeLabel);
    progressInput.setAttribute('aria-valuetext', `${timeLabel}, ${forceLabel(state.force)}, ${state.phase}`);
    setText('force-play', playing ? 'Pause' : time >= totalTime() ? (mode === 'guided' ? 'Replay rollouts' : 'Replay rollout') : mode === 'guided' ? 'Play rollouts' : 'Run this force');
    root.querySelector('.force-timeline-label').textContent = mode === 'guided' ? 'Drag to explore the rollouts' : 'Drag to explore this rollout';
    const tickLabels = mode === 'guided' ? ['2 N · too gentle', '9 N · too forceful', '6 N · just right'] : ['Approach', 'Wipe', 'Observe the result'];
    root.querySelectorAll('.force-timeline-ticks span').forEach((tick, i) => { tick.textContent = tickLabels[i]; });
    renderScene(state);
    renderNarrative(state);
  }

  function pause() {
    playing = false;
    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    lastTick = null;
    render();
  }

  function tick(now) {
    if (!playing) return;
    if (lastTick !== null) time = Math.min(totalTime(), time + Math.min(now - lastTick, 100) / episodeDuration * 100);
    lastTick = now;
    if (time >= totalTime()) {
      pause();
      return;
    }
    render();
    animationFrame = requestAnimationFrame(tick);
  }

  playButton.addEventListener('click', () => {
    if (playing) {
      pause();
      return;
    }
    if (time >= totalTime()) time = 0;
    playing = true;
    lastTick = null;
    render();
    animationFrame = requestAnimationFrame(tick);
  });

  progressInput.addEventListener('input', () => {
    const nextTime = Number(progressInput.value);
    pause();
    time = clamp(nextTime, 0, totalTime());
    render();
  });

  find('force-reset').addEventListener('click', () => {
    pause();
    time = 0;
    render();
  });

  episodeButtons.forEach((button) => button.addEventListener('click', () => {
    pause();
    time = Number(button.dataset.forceEpisode) * 100;
    render();
  }));

  modeButtons.forEach((button) => button.addEventListener('click', () => {
    if (mode === button.dataset.forceMode) return;
    pause();
    mode = button.dataset.forceMode;
    time = 0;
    render();
  }));

  choiceInput.addEventListener('input', () => {
    if (playing) return;
    chosenForce = clamp(Number(choiceInput.value), 0, 12);
    time = 0;
    render();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && playing) pause();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && playing) pause();
    }).observe(lab);
  }

  root.querySelectorAll('button, input').forEach((control) => { control.disabled = false; });
  render();
})();
