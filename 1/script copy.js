const element = document.querySelector('.typing-animation');
element.addEventListener('animationend', () => {
  setTimeout(() => {
    element.style.animation = 'none';
    element.offsetHeight; /* trigger reflow */
    element.style.animation = null;
  }, 3000);
});
