





document.addEventListener('DOMContentLoaded', () => {
  // Refine Your Search Button
  const refineButton = document.getElementById('refine-button');
  const refineMenu = document.getElementById('refine-menu');
  const selectedRefine = document.getElementById('selected-refine');

  refineButton.addEventListener('click', () => {
      refineMenu.classList.toggle('hidden');
  });

  window.addEventListener('click', (event) => {
      if (!refineButton.contains(event.target) && !refineMenu.contains(event.target)) {
          refineMenu.classList.add('hidden');
      }
  });

  const refineOptions = document.querySelectorAll('.refine-option');
  refineOptions.forEach(option => {
      option.addEventListener('click', (event) => {
          event.preventDefault();
          selectedRefine.textContent = option.textContent; // Update button text
          refineMenu.classList.add('hidden');
      });
  });

  // Publication Year Button
  const yearButton = document.getElementById('year-button');
  const yearMenu = document.getElementById('year-menu');
  const selectedYear = document.getElementById('selected-year');

  yearButton.addEventListener('click', () => {
      yearMenu.classList.toggle('hidden');
  });

  window.addEventListener('click', (event) => {
      if (!yearButton.contains(event.target) && !yearMenu.contains(event.target)) {
          yearMenu.classList.add('hidden');
      }
  });

  const yearOptions = document.querySelectorAll('.year-option');
  yearOptions.forEach(option => {
      option.addEventListener('click', (event) => {
          event.preventDefault();
          selectedYear.textContent = option.textContent; // Update button text
          yearMenu.classList.add('hidden');
      });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('language-button');
  const menu = document.getElementById('language-menu');
  const selectedLanguage = document.getElementById('selected-language');

  button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
  });

  window.addEventListener('click', (event) => {
      if (!button.contains(event.target) && !menu.contains(event.target)) {
          menu.classList.add('hidden');
      }
  });

  const options = document.querySelectorAll('.language-option');
  options.forEach(option => {
      option.addEventListener('click', (event) => {
          event.preventDefault(); // 防止鏈接默認行為
          selectedLanguage.textContent = option.textContent; // 更新按鈕文本
          menu.classList.add('hidden'); // 隱藏菜單
      });
  });
});












// script.js
