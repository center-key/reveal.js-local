# reveal.js-local
<img src=https://center-key.github.io/reveal.js-local/assets/js-logo.png align=right width=200 alt=logo>

_A single HTML file for showing a reveal.js presentation locally_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/reveal.js-local/blob/main/LICENSE.txt)
[![Build](https://github.com/center-key/reveal.js-local/actions/workflows/run-spec-on-push.yaml/badge.svg)](https://github.com/center-key/reveal.js-local/actions/workflows/run-spec-on-push.yaml)

## A) Try It
View the
[sample presentation](https://center-key.github.io/reveal.js-local).

## B) Use It
Save [`presentation-template.html`](docs/presentation-template.html) (less then 20 KB)
locally and then view and edit it locally.

From the terminal you can download the file by entering:
```bash
$ curl https://center-key.github.io/reveal.js-local/presentation-template.html --remote-name
$ open presentation-template.html
```

## C) Details
This project uses **reveal.js** by Hakim El Hattab.
For documentation, see: [reveal.js](https://github.com/hakimel/reveal.js)

**Extras:**
1. References a CDN* copy of reveal.js so the presentation doesn't start off over 1 MB
1. Adds some sample slides to show formatting
1. Toggles hidden slides by pressing the backtick (`) key
1. Includes hover effects for tables and source code to help speaker point to items
1. Trims code whitespace to render properly even when aligned with surrounding HTML

*reveal.js and other libraries are loaded from a CDN (Content Delivery Network) making it much
easier to manage your presentation locally, but you must be connected to the internet to view
your presentation.

---
[MIT License](LICENSE.txt)
