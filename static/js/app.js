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

var exercicioBoxes = document.querySelectorAll('.exercicio-box[data-page]');
if (exercicioBoxes.length) {
  exercicioBoxes.forEach(function (box) {
    box.style.cursor = 'pointer';
    box.addEventListener('click', function () {
      var page = box.getAttribute('data-page');
      if (page) {
        window.location.href = page;
      }
    });
  });
}

var scrollLinks = document.querySelectorAll('a[data-scroll-target]');
if (scrollLinks.length) {
  scrollLinks.forEach(function (link) {
    link.style.cursor = 'pointer';
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var targetId = link.getAttribute('data-scroll-target');
      var target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

var backArrows = document.querySelectorAll('img.arrow-blue');
if (backArrows.length) {
  backArrows.forEach(function (img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
      var backPage = img.getAttribute('data-back-page');
      if (backPage) {
        window.location.href = backPage;
      } else {
        window.location.href = '../../index.html';
      }
    });
  });
}
