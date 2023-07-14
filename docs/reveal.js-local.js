//! reveal.js-local v0.1.0 ~~ https://github.com/center-key/reveal.js-local ~~ MIT License

const revealJsLocal = {
   version: '0.1.0',
   themes() {
      const addCss = (url) => {
         const link = dna.dom.create('link', { rel: 'stylesheet', type: 'text/css', href: url });
         link.rel =   'stylesheet';
         globalThis.document.head.appendChild(link);
         };
      const theme =          themes[selectedTheme];
      const highlightTheme = dna.util.toKebab(syntaxHighlightingTheme);
      addCss(`https://cdn.jsdelivr.net/npm/reveal.js@4.5/dist/theme/${theme}.css`);
      addCss(`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8/build/styles/${highlightTheme}.min.css`);
      },
   background() {
      globalThis.document.body.style.backgroundSize =     'cover';
      globalThis.document.body.style.backgroundPosition = 'center center';
      const url = backgroundImages[selectedBackgroundImage];
      if (backgroundTypeToUse.color)
         globalThis.document.body.style.backgroundColor = backgroundColor;
      else if (backgroundTypeToUse.gradient)
         globalThis.document.body.style.backgroundImage = backgroundGradient;
      else
         globalThis.document.body.style.backgroundImage = 'url(' + url + ')';
      },
   titles() {
      const title = globalThis.document.getElementById('presentation-title').textContent;
      globalThis.document.head.querySelector('title').textContent = title;
      const metaHeader =  (h2) => h2.nextElementSibling?.matches('section');
      const metaHeaders = dna.dom.filter(globalThis.document.querySelectorAll('.slides >section >h2'), metaHeader);
      metaHeaders.forEach(h2 => h2.style.display = 'none');
      },
   links() {
      const links = globalThis.document.querySelectorAll('a.external-site, .external-site a');
      links.forEach(link => link.target = '_blank');
      // <span class=display-address data-name=sales data-domain=ibm.com></span>
      const elems = [...globalThis.document.getElementsByClassName('display-address')];
      const at = '<span>' + String.fromCharCode(64) + '</span>';
      elems.forEach(elem => elem.innerHTML = elem.dataset.name + at + elem.dataset.domain);
      },
   images() {
      const folder = globalThis.window.location.pathname.split('/').slice(0, -1).join('/');
      console.log('Images folder:');
      console.log('%c' + folder + '/assets', 'font-family: monospace;');
      const configureImage = (img) => {
         if (!img.src.includes('//'))
            img.src = folder + img.src;
         if (img.dataset.width)
            img.style.width = img.dataset.width;
         };
      globalThis.document.querySelectorAll('.reveal img').forEach(configureImage);
      },
   textarea() {
      const trim = (elem) => {
         const leadingSpaces = new RegExp('^' + elem.value.match(/\s*/)[0], 'mg');
         const text =          elem.value.replace(leadingSpaces, '').trim();
         elem.value =          text;
         elem.style.height =   (text.split('\n').length + 1) * 1.4 + 'em';
         };
      globalThis.document.querySelectorAll('textarea').forEach(trim);
      },
   speakerNotes() {
      const removeNotes = () => {
         const notesPanel = globalThis.document.querySelector('body >div.notes');
         if (notesPanel)
            notesPanel.style.opacity = '0';
         globalThis.window.setTimeout(() => notesPanel?.remove(), 1100);
         };
      const handleEnterKey = () => {
         const notesElem =  Reveal.getCurrentSlide().querySelector('aside.notes');
         const content =    notesElem?.innerHTML ?? '[No notes available]';
         const notesPanel = globalThis.document.querySelector('body >div.notes');
         const show = () => {
            const elem = dna.dom.create('div', { class: 'notes', html: content });
            globalThis.document.body.appendChild(elem);
            globalThis.window.requestAnimationFrame(() => elem.style.opacity = '1');
            };
         return notesPanel ? removeNotes() : show();
         };
      dna.dom.onEnterKey(handleEnterKey);
      Reveal.on('slidechanged', removeNotes);
      },
   hiddenSlidesStorage: [],
   hiddenSlides() {
      // <section data-visibility=hidden>
      const container = globalThis.document.querySelector('.slides');
      const domInsertAt = (elem, index) => {
         if (index === 0)
            container.prepend(elem);
         else
            container.children[index - 1].insertAdjacentElement('afterend', elem);
         return elem;
         };
      const handleBacktick = () => {
         dna.dom.toggleClass(container, 'unhide-mode');
         const unhideMode = container.classList.contains('unhide-mode');
         const show = (slide) => domInsertAt(slide, Number(slide.dataset.slideIndex));
         const hide = (slide) => slide.remove();
         revealJsLocal.hiddenSlidesStorage.forEach(unhideMode ? show : hide);
         Reveal.slide();  //refresh progress bar and control arrows
         };
      const slides = globalThis.document.querySelectorAll('section[data-visibility=hidden]');
      slides.forEach(slide => slide.dataset.slideIndex = String(dna.dom.index(slide)));
      revealJsLocal.hiddenSlidesStorage = slides;
      dna.dom.on('keyup', handleBacktick, { keyFilter: '`' });
      },
   reveal() {
      const config = {  //see: https://revealjs.com/config
         autoSlide:        autoAdvance ? autoAdvanceSeconds * 1000 : 0,  //milliseconds to automatically advance slide (0 = disable)
         controls:         true,
         controlsTutorial: true,
         hash:             false,
         loop:             false,
         progress:         true,
         };
      Reveal.initialize(config).then(presentationCustomSetup);
      },
   setup() {
      const logStyle = 'font-size: 2rem; font-weight: bold; color: teal;';
      console.log('%creveal.js-local v' + revealJsLocal.version, logStyle);
      const fontSize = String(baseFontSizePercent) + '%';
      globalThis.document.querySelector('.reveal .slides').style.fontSize = fontSize;
      revealJsLocal.themes();
      revealJsLocal.background();
      revealJsLocal.titles();
      revealJsLocal.links();
      revealJsLocal.images();
      revealJsLocal.textarea();
      revealJsLocal.speakerNotes();
      revealJsLocal.hiddenSlides();
      revealJsLocal.reveal();
      },
   };

dna.dom.onReady(revealJsLocal.setup);
