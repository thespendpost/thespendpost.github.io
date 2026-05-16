// Sélecteur de langue FR/EN
let currentLang = 'fr';

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  const elements = document.querySelectorAll('[data-fr]');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) el.innerHTML = text;
  });
  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) toggleBtn.textContent = currentLang.toUpperCase() + ' ↓';
  document.documentElement.lang = currentLang;
}
