# Kun Song
Repository for Kun Song's academic research website.

`index.html` shows publications by research area, starting with Manipulation.
`publications.html` shows the full list. Both pages use the paper entries in
`javascripts/publications.js`; edit that file to update papers or their categories.
Both pages offer a Sort by menu: First author first (the default, including equal
first authorship, then newest within each group) or Newest first (all authorships).
Switching research areas keeps the selected order; publication status does not
affect either sorting mode. Update `firstAuthor` and `date` with each paper.

Dates use the publisher's publication date for published papers and the first
arXiv release for preprints. They are not acceptance dates or necessarily the
earliest online version of a published paper. Keep only known precision (`YYYY`,
`YYYY-MM`, or `YYYY-MM-DD`); `dateSource` records verified metadata. PEARS currently
has only a known year (2026). Papers with identical dates keep their data order.

Publication styles are in `stylesheets/publications.css`. No build step is required.

The CollaBot project website is in `projects/CollaBot/index.html`, served at
`https://song-kun.github.io/projects/CollaBot/`. The `/CollaBot/` path redirects
there to preserve the URL printed in the paper. Its images and demonstration
videos are self-contained in that project directory. School logos were extracted
from the supplied poster; authors, affiliations, and results follow the final
RA-L manuscript. Acceptance is dated November 27, 2026. The publication entry
retains its first arXiv release date for sorting until a publication date is known;
`acceptanceDate` records acceptance separately.

The PEARS project website is served at `https://song-kun.github.io/pears/`.
Edit `pears/index.html` for its content. Styles, images, PDF, and videos remain
under `projects/pears/` so existing resource links stay valid. The old page at
`projects/pears/index.html` redirects to `/pears/`. File previews use explicit
`index.html` links; HTTP previews and GitHub Pages use the short directory URL.

The interactive whiteboard demo at `/pears/#force-playground` uses
`projects/pears/force-playground.js` and `force-playground.css`. It illustrates
PFR with three fixed-force rollouts (2 N, 9 N, 6 N), a draggable timeline, and
a custom-force mode. Its 5–8 N contact window and outcomes are illustrative,
not measured experimental results. It runs locally without an API or build step.
