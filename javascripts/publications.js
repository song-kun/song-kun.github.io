/* Shared publication content for index.html and publications.html.
 * Add or edit papers here; categories may contain more than one research area.
 * firstAuthor includes equal first authorship. date uses the publisher's publication
 * date for published papers or the first arXiv release for preprints. Keep only
 * known precision (YYYY, YYYY-MM, or YYYY-MM-DD); dateSource records the source.
 */
(function () {
  "use strict";

  const categories = {
    manipulation: "Manipulation",
    navigation: "Navigation",
    "multi-robot-system": "Multi-robot system"
  };

  const publications = [
  {
    "id": "dlg",
    "firstAuthor": false,
    "date": "2026",
    "dateSource": "https://api.crossref.org/works/10.1109/TIM.2026.3654720",
    "categories": [
      "navigation",
      "multi-robot-system"
    ],
    "status": "published",
    "title": "A Novel Dynamic Localization Graph for Efficient Relative Localization",
    "authors": "Gaoming Chen, <b>Kun Song</b>, Wenhang Liu, Wenyao Ma, and Zhenhua Xiong",
    "venue": "<i>IEEE Transactions on Instrumentation and Measurement (TIM)</i>, vol. 75, 2026",
    "media": {
      "type": "image",
      "src": "research/gif/DLG.gif",
      "alt": "A Novel Dynamic Localization Graph for Efficient Relative Localization",
      "width": 480,
      "height": 414
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://ieeexplore.ieee.org/document/11355374/"
      }
    ],
    "summary": "We propose <b>DLG</b>, a sensor-independent framework to assess uncertainty during multi-robot relative localization. We validate the proposed method in a place-recognition-based scenario."
  },
  {
    "id": "collabot",
    "firstAuthor": true,
    "date": "2025-08-05",
    "dateSource": "https://arxiv.org/abs/2508.03526",
    "categories": [
      "manipulation",
      "multi-robot-system"
    ],
    "status": "under-review",
    "title": "CollaBot: Vision-Language Guided Simultaneous Collaborative Manipulation of Large Objects",
    "authors": "<b>Kun Song</b>, Shentao Ma, Gaoming Chen, Ninglong Jin, Guangbao Zhao, Mingyu Ding, Zhenhua Xiong, and Jia Pan",
    "venue": "Under review for <i>Robotics and Automation Letters</i>",
    "media": {
      "type": "image",
      "src": "research/gif/move_chair.gif",
      "alt": "CollaBot: Vision-Language Guided Simultaneous Collaborative Manipulation of Large Objects",
      "width": 720,
      "height": 346
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://arxiv.org/abs/2508.03526"
      },
      {
        "label": "Code",
        "href": "https://github.com/song-kun/CollaBot"
      }
    ],
    "summary": "We propose <var>CollaBot</var>, the first generalist framework for simultaneous collaborative manipulation. First, we use SEEM for scene segmentation and point cloud extraction of the target object. Then, we propose a collaborative grasping framework, which decomposes the task into local grasp pose generation and global collaboration. Finally, we design a 2-stage planning module that can generate collision-free trajectories to achieve this task."
  },
  {
    "id": "p2explore",
    "firstAuthor": true,
    "date": "2025-10-19",
    "dateSource": "https://api.crossref.org/works/10.1109/IROS60139.2025.11247205",
    "categories": [
      "navigation"
    ],
    "status": "published",
    "title": "<var>P<sup>2</sup></var> Explore: Efficient Exploration in Unknown Cluttered Environment with Floor Plan Prediction",
    "authors": "<b>Kun Song</b>, Gaoming Chen, Masayoshi Tomizuka, Wei Zhan, Zhenhua Xiong, and Mingyu Ding",
    "venue": "<i>IROS</i>, 2025",
    "media": {
      "type": "image",
      "src": "projects/p2explore/resources/exp.gif",
      "alt": "P 2 Explore: Efficient Exploration in Unknown Cluttered Environment with Floor Plan Prediction",
      "width": 960,
      "height": 836
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://arxiv.org/abs/2409.10878"
      },
      {
        "label": "Website",
        "href": "https://song-kun.github.io/projects/p2explore"
      },
      {
        "label": "Code",
        "href": "https://github.com/song-kun/P2Explore"
      }
    ],
    "summary": "We propose <var>P<sup>2</sup></var> Explore, a framework that predicts the unseen floor plan based in cluttered environments. Based on the predicted map, we extract room segmentations and generate their topology. Exploration is accelerated under the guidance of this topology."
  },
  {
    "id": "flipping",
    "firstAuthor": false,
    "date": "2025-05",
    "dateSource": "https://api.crossref.org/works/10.1109/LRA.2025.3557749",
    "categories": [
      "manipulation",
      "multi-robot-system"
    ],
    "status": "published",
    "title": "A Novel Planning Framework for Complex Flipping Manipulation of Multiple Mobile Manipulators",
    "authors": "Wenhang Liu, Meng Ren, <b>Kun Song</b>, Yu Wang, and Zhenhua Xiong",
    "venue": "<i>Robotics and Automation Letters</i>, 2025",
    "media": {
      "type": "image",
      "src": "research/gif/MMMPlanning.gif",
      "alt": "A Novel Planning Framework for Complex Flipping Manipulation of Multiple Mobile Manipulators",
      "width": 512,
      "height": 288
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://arxiv.org/abs/2312.06168"
      }
    ],
    "summary": "We propose a novel planning framework for complex flipping manipulation by incorporating platform motions and regrasping. We formulate the planning problem as a set cover problem and determine minimal number of regrasping."
  },
  {
    "id": "containment",
    "firstAuthor": false,
    "date": "2025",
    "dateSource": "https://api.crossref.org/works/10.1109/TRO.2025.3539195",
    "categories": [
      "multi-robot-system"
    ],
    "status": "published",
    "title": "Containment Control of Multi-Robot Systems with Non-uniform Time-varying Delays",
    "authors": "Meng Ren, Wenhang Liu, <b>Kun Song</b>, Ling Shi, and Zhenhua Xiong",
    "venue": "<i>IEEE Transactions on Robotics</i>, 2025",
    "media": {
      "type": "image",
      "src": "research/gif/contain_control.gif",
      "alt": "Containment Control of Multi-Robot Systems\n                      with Non-uniform Time-varying Delays",
      "width": 1600,
      "height": 900
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://ieeexplore.ieee.org/abstract/document/10876769"
      }
    ],
    "summary": "We propose a containment control law for double-integrator MRSs subject to non-uniform time-varying delays. The stability is proved by the Lyapunov-Krasovskii function and linear matrix inequalities"
  },
  {
    "id": "rendezvous",
    "firstAuthor": true,
    "date": "2024-11",
    "dateSource": "https://api.crossref.org/works/10.1109/LRA.2024.3460420",
    "categories": [
      "navigation",
      "multi-robot-system"
    ],
    "status": "published",
    "title": "Multi-Robot Rendezvous in Unknown Environment with Limited Communication",
    "authors": "<b>Kun Song</b>, Gaoming Chen, Wenhang Liu, and Zhenhua Xiong",
    "venue": "<i>Robotics and Automation Letters</i>, 2024",
    "media": {
      "type": "image",
      "src": "research/image/rend.jpg",
      "alt": "Multi-Robot Rendezvous in Unknown\n                      Environment with Limited Communication",
      "width": 3000,
      "height": 1687
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://ieeexplore.ieee.org/document/10679913"
      },
      {
        "label": "Code",
        "href": "https://github.com/song-kun/Distributed-Multi-Robot-Topological-Map"
      }
    ],
    "summary": "We focus on rendezvous in unknown environments where communication is available. We divide this task into two steps: rendezvous based environment exploration with relative pose estimation and rendezvous point selection. A new strategy called partitioned and incomplete exploration for rendezvous (PIER) is proposed to efficiently explore the unknown environment and a rendezvous point can be selected for efficient rendezvous."
  },
  {
    "id": "rhaml",
    "firstAuthor": false,
    "date": "2024-07",
    "dateSource": "https://api.crossref.org/works/10.1109/LRA.2024.3406056",
    "categories": [
      "navigation",
      "multi-robot-system"
    ],
    "status": "published",
    "title": "RHAML: Rendezvous-based Hierarchical Architecture for Mutual Localization",
    "authors": "Gaoming Chen, <b>Kun Song</b>, Xiang Xu, Wenhang Liu, and Zhenhua Xiong",
    "venue": "<i>Robotics and Automation Letters</i>, 2024",
    "media": {
      "type": "image",
      "src": "research/gif/RHAML2.gif",
      "alt": "RHAML: Rendezvous-based Hierarchical\n                      Architecture for Mutual Localization",
      "width": 1014,
      "height": 583
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://ieeexplore.ieee.org/abstract/document/10540183"
      }
    ],
    "summary": "We propose a novel rendezvous-based hierarchical architecture for mutual localization (RHAML). Anisotropic convolutions are introduced into the network, yielding initial localization results and the iterative refinement module with rendering is employed. Finally, the pose graph optimization is conducted to obtain more accurate results."
  },
  {
    "id": "fht-map",
    "firstAuthor": true,
    "date": "2024-06",
    "dateSource": "https://api.crossref.org/works/10.1109/LRA.2024.3392493",
    "categories": [
      "navigation"
    ],
    "status": "published",
    "title": "FHT-Map: Feature-based Hybrid Topological Map for Relocalization and Path Planning",
    "authors": "<b>Kun Song</b>, Wenhang Liu, Gaoming Chen, Xiang Xu, and Zhenhua Xiong",
    "venue": "<i>Robotics and Automation Letters</i>, 2024",
    "media": {
      "type": "image",
      "src": "research/image/fht_map.png",
      "alt": "FHT-Map: Feature-based Hybrid Topological\n                      Map for Relocalization and Path Planning",
      "width": 1584,
      "height": 864
    },
    "links": [
      {
        "label": "Paper",
        "href": "https://ieeexplore.ieee.org/document/10506547"
      },
      {
        "label": "Code",
        "href": "https://github.com/song-kun/FHT-Map"
      }
    ],
    "summary": "We propose a feature-based hybrid topological map (FHT-Map) which consists of two types of nodes: main node and support node. Main nodes store compressed visual information and laser scan to enhance subsequent relocalization capability. Support nodes retain a minimal amount of data to ensure storage efficiency while facilitating path planning."
  },
  {
    "id": "pears",
    "firstAuthor": true,
    "date": "2026",
    "categories": [
      "manipulation"
    ],
    "status": "under-review",
    "title": "PEARS: Physical-Prior-Guided Efficient Adaptation via Failure Reasoning and Diffusion Steering for Tactile Manipulation",
    "authors": "<b>Kun Song*</b>, Yiming Wang*, Yilin Chen*, Tianyi Ding*, Jiaxin Tian, Tianqi Gong, Daolin Ma, and Jia Pan",
    "venue": "<i>Submitted to ICRA 2027</i> \u00b7 Under review",
    "media": {
      "type": "video",
      "src": "research/video/PEARS.mp4",
      "poster": "research/image/pears-poster.jpg",
      "alt": "PEARS tactile manipulation demonstration"
    },
    "links": [
      {
        "label": "Paper",
        "href": "projects/pears/pears.pdf"
      },
      {
        "label": "Website",
        "href": window.location.protocol === "file:" ? "pears/index.html" : "pears/"
      }
    ],
    "summary": "PEARS combines physics-guided force reasoning and tactile-conditioned diffusion steering to adapt frozen pretrained policies with fewer real-world interactions. It achieves 95% success on Whiteboard Erasing and 90% on Pipette Liquid Aspiration in real-world experiments."
  },
  {
    "id": "distributed-control",
    "firstAuthor": false,
    "date": "2024-06-09",
    "dateSource": "https://arxiv.org/abs/2406.05613",
    "categories": [
      "manipulation",
      "multi-robot-system"
    ],
    "status": "preprint",
    "title": "Distributed Motion Control of Multiple Mobile Manipulator System with Disturbance and Communication Delay",
    "authors": "Wenhang Liu, Meng Ren, <b>Kun Song</b>, Michael Yu Wang, and Zhenhua Xiong",
    "venue": "<i>arXiv preprint</i>, 2024",
    "media": {
      "type": "image",
      "src": "research/gif/mmmcontrol.gif",
      "alt": "Distributed Motion Control of Multiple\n                      Mobile Manipulator System with Disturbance and Communication Delay",
      "width": 480,
      "height": 270
    },
    "links": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2406.05613"
      }
    ],
    "summary": "We present a novel distributed motion control approach aimed at reducing the interaction forces between multiple mobile manipulators. The stability of the control law is rigorously proven by the Lyapunov theorem and the results are validated in simulations and experiments."
  }
];

  const browser = document.querySelector("[data-publication-view]");
  if (!browser) return;

  const results = browser.querySelector(".publication-results");
  const tabs = Array.from(browser.querySelectorAll(".publication-tab"));
  const showAll = browser.dataset.publicationView === "all";
  const sortControl = browser.querySelector(".publication-sort-select");
  let selectedCategory = "manipulation";
  let sortOrder = sortControl.value;

  function escapeAttribute(value) {
    return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
      .replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderMedia(media) {
    if (media.type === "video") {
      return `<video class="publication-video" autoplay muted loop playsinline controls preload="metadata"
        poster="${escapeAttribute(media.poster)}" aria-label="${escapeAttribute(media.alt)}">
        <source src="${escapeAttribute(media.src)}" type="video/mp4">
        <a href="${escapeAttribute(media.src)}">Watch the demonstration video</a>.
      </video>`;
    }
    return `<img src="${escapeAttribute(media.src)}" alt="${escapeAttribute(media.alt)}"
      width="${media.width}" height="${media.height}" loading="lazy" decoding="async">`;
  }

  function renderPaper(paper) {
    const links = paper.links.map(link =>
      `<a href="${escapeAttribute(link.href)}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
    ).join(" / ");
    const tags = paper.categories.map(category => `<li>${categories[category]}</li>`).join("");

    // The HTML in titles, authors, venues, and summaries is trusted content maintained above.
    return `<article class="publication-card" id="paper-${paper.id}" aria-labelledby="title-${paper.id}">
      <div class="publication-media">${renderMedia(paper.media)}</div>
      <div class="publication-details">
        <h3 class="publication-title" id="title-${paper.id}">${paper.title}</h3>
        <p class="publication-authors">${paper.authors}</p>
        <p class="publication-venue">${paper.venue}</p>
        <div class="publication-links">${links}</div>
        <p class="publication-summary">${paper.summary}</p>
        <ul class="publication-tags" aria-label="Research areas">${tags}</ul>
      </div>
    </article>`;
  }

  function comparePapers(a, b) {
    if (sortOrder === "first-author" && a.firstAuthor !== b.firstAuthor) {
      return a.firstAuthor ? -1 : 1;
    }
    return b.date.localeCompare(a.date);
  }

  function render(category) {
    selectedCategory = category;
    const papers = publications
      .filter(paper => showAll || paper.categories.includes(category))
      .sort(comparePapers);

    results.querySelectorAll("video").forEach(video => video.pause());
    results.innerHTML = papers.map(renderPaper).join("");

    tabs.forEach(tab => {
      const selected = tab.dataset.category === category;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) results.setAttribute("aria-labelledby", tab.id);
    });
  }

  sortControl.addEventListener("change", () => {
    sortOrder = sortControl.value;
    render(selectedCategory);
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => render(tab.dataset.category));
    tab.addEventListener("keydown", event => {
      let nextIndex;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[nextIndex].focus();
      render(tabs[nextIndex].dataset.category);
    });
  });

  // Each new visit starts in Manipulation; the full list always shows every paper once.
  render("manipulation");
})();
