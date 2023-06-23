// reveal.js-local -- MIT

const revealJsLocal = {
   version: '{{pkg.version}}',
   reveal() {
      const config = {  //see: https://revealjs.com/config
         autoSlide:        autoAdvance ? autoAdvanceSeconds * 1000 : 0,  //milliseconds to automatically advance slide (0 = disable)
         controls:         true,
         controlsTutorial: true,
         hash:             false,
         loop:             false,
         progress:         true,
         };
      Reveal.initialize(config);
      },
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
      globalThis.document.head.querySelector('title').textContent =           title;
      globalThis.document.getElementById('presentation-title').innerHTML =    title;
      globalThis.document.getElementById('presentation-subtitle').innerHTML = subtitle;
      },
   images() {
      const folder = document.location.href.split('/').slice(0, -1).join('/');
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
   hiddenSlidesStorage: [],
   hiddenSlides() {
      const handleBacktick = () => {
         const container =     globalThis.document.querySelector('.slides');
         const hidableSlides = dna.dom.filterByClass(container.children, 'toggle-on-backtick');
         const stash =         (slide) => revealJsLocal.hiddenSlidesStorage.push(slide) && slide.remove();
         if (hidableSlides.length)
            hidableSlides.forEach(stash);
         else
            while (revealJsLocal.hiddenSlidesStorage.length)
               container.appendChild(revealJsLocal.hiddenSlidesStorage.pop());
         Reveal.slide();  //refresh progress bar and control arrows
         };
      globalThis.setTimeout(handleBacktick, 1000);  //allow time for slides to process before hiding
      dna.dom.on('keyup', handleBacktick, { keyFilter: '`' });
      },
   setup() {
      const logStyle = 'font-size: 2rem; font-weight: bold; color: teal;';
      console.log('%creveal.js-local v' + revealJsLocal.version, logStyle);
      const fontSize = String(baseFontSizePercent) + '%';
      globalThis.document.querySelector('.reveal .slides').style.fontSize = fontSize;
      revealJsLocal.themes();
      revealJsLocal.background();
      revealJsLocal.titles();
      revealJsLocal.images();
      revealJsLocal.textarea();
      revealJsLocal.hiddenSlides();
      revealJsLocal.reveal();
      },
   };

dna.dom.onReady(revealJsLocal.setup);
