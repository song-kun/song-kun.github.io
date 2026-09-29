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
