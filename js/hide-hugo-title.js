document.addEventListener('DOMContentLoaded', () => {
  const isCreditsPage = window.location.pathname.includes('/credits');
  if (isCreditsPage) {
    const h1s = document.querySelectorAll('h1');
    h1s.forEach((h1) => {
      if (!h1.classList.contains('credits-heading')) {
        h1.style.display = 'none';
      }
    });
  }
});