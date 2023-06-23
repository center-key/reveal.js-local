# reveal.js-local
<img src=https://center-key.github.io/reveal.js-local/assets/js-logo.png align=right width=200 alt=logo>

_A single HTML file for showing a reveal.js presentation locally_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/reveal.js-local/blob/main/LICENSE.txt)
[![Vulnerabilities](https://snyk.io/test/github/center-key/reveal.js-local/badge.svg)](https://snyk.io/test/github/center-key/reveal.js-local)
[![Build](https://github.com/center-key/reveal.js-local/workflows/build/badge.svg)](https://github.com/center-key/reveal.js-local/actions/workflows/run-spec-on-push.yaml)

## Try Tt
View the
[sample presentation](https://center-key.github.io/reveal.js-local).

## Use Tt
Save [`presentation-template.html`](docs/presentation-template.html)
locally and then view and edit it locally.

From the terminal you can download the file by entering:
```bash
$ curl https://center-key.github.io/reveal.js-local/presentation-template.html --remote-name
```

## reveal.js
This project uses **reveal.js** by Hakim El Hattab.
For documentation, see: [reveal.js](https://github.com/hakimel/reveal.js)

## Details
1. References a CDN copy of reveal.js so each presentation doesn't start off over 1MB
1. Adds some sample slides to show formatting
1. Toggles hidden slides by pressng the backtick (`) key
1. Includes hover effects for tables and source code to help speaker point to items
1. Trims code whitespace to render properly even when aligned with surrounding HTML

---
[MIT License](LICENSE.txt)
