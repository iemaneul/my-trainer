if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('static/js/sw.js')
      .then(function (registration) {
        console.log('Service Worker registered:', registration.scope);
      })
      .catch(function (error) {
        console.error('Service Worker registration failed:', error);
      });
  });
}

var treinoButtons = document.querySelectorAll('main .treino-box button[data-page]');
if (treinoButtons.length) {
  treinoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var page = button.getAttribute('data-page');
      if (page) {
        window.location.href = page;
      }
    });
  });
}

var backArrows = document.querySelectorAll('img.arrow-blue');
if (backArrows.length) {
  backArrows.forEach(function (img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      window.location.href = '../../index.html';
    });
  });
}
