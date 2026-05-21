// Sélecteur de langue FR/EN avec persistance dans localStorage
(function() {
  // Récupère la langue stockée, ou détecte celle du navigateur, par défaut EN
  function getInitialLang() {
    const stored = localStorage.getItem('tsp-lang');
    if (stored === 'fr' || stored === 'en') return stored;
    // Anglais par défaut, sauf si le navigateur est en français
    const browserLang = (navigator.language || 'en').toLowerCase().slice(0, 2);
    return browserLang === 'fr' ? 'fr' : 'en';
  }

  let currentLang = getInitialLang();

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('tsp-lang', lang);
    document.documentElement.lang = lang;

    // Met à jour tous les éléments avec data-fr / data-en
    document.querySelectorAll('[data-fr]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text !== null) {
        if (el.hasAttribute('data-html')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Met à jour les attributs traduits (title, placeholder, alt, content meta)
    document.querySelectorAll('[data-fr-title]').forEach(el => {
      el.setAttribute('title', el.getAttribute('data-' + lang + '-title') || '');
    });
    document.querySelectorAll('[data-fr-content]').forEach(el => {
      el.setAttribute('content', el.getAttribute('data-' + lang + '-content') || '');
    });

    // Met à jour le sélecteur visuel
    document.querySelectorAll('.lang-pill .lang-option').forEach(el => {
      if (el.getAttribute('data-lang') === lang) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Met à jour le titre de la page
    const titleEl = document.querySelector('title');
    if (titleEl && titleEl.hasAttribute('data-' + lang)) {
      document.title = titleEl.getAttribute('data-' + lang);
    }
  }

  // Initialise à la première charge
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));
  } else {
    applyLang(currentLang);
  }

  // Gère les clics sur le sélecteur
  document.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-pill .lang-option');
    if (opt) {
      const lang = opt.getAttribute('data-lang');
      if (lang && lang !== currentLang) applyLang(lang);
    }
  });
})();
