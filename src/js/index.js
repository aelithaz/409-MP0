import '../css/main.css';

function changeBackground(color) {
  document.querySelector('.card').style.backgroundColor = color;
}

// Make it accessible from inline HTML `onclick` handlers
window.changeBackground = changeBackground;