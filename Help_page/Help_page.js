document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('language-button');
    const menu = document.getElementById('language-menu');
  
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  
    window.addEventListener('click', (event) => {
      if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add('hidden');
      }
    });
  });