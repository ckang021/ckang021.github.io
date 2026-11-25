document.addEventListener('DOMContentLoaded', function () {
  var filters = document.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-category]');
  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      filters.forEach(function (other) { other.setAttribute('aria-pressed', String(other === button)); });
      var visible = 0;
      cards.forEach(function (card) {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
        if (!card.hidden) visible++;
      });
      document.getElementById('filter-status').textContent = visible + ' case ' + (visible === 1 ? 'study' : 'studies') + ' shown';
    });
  });
  var toggle = document.querySelector('.nav-toggle');
  var navigation = document.querySelector('.nav-links');
  if (toggle && navigation) {
    toggle.addEventListener('click', function () { toggle.setAttribute('aria-expanded', String(navigation.classList.contains('open'))); });
  }
  var dialog = document.querySelector('.frame-dialog');
  if (dialog) {
    document.querySelectorAll('[data-image]').forEach(function (button) {
      button.addEventListener('click', function () {
        dialog.querySelector('img').src = button.dataset.image;
        dialog.querySelector('img').alt = button.dataset.caption;
        dialog.querySelector('p').textContent = button.dataset.caption;
        dialog.showModal();
      });
    });
    dialog.querySelector('.close-dialog').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
  }
  document.querySelectorAll('.load-video').forEach(function (button) {
    button.addEventListener('click', function () {
      var shell = button.closest('[data-video]');
      var frame = document.createElement('iframe');
      frame.src = 'https://www.tiktok.com/player/v1/' + shell.dataset.video + '?autoplay=0';
      frame.title = 'Spigen TikTok video';
      frame.allow = 'fullscreen; encrypted-media';
      frame.allowFullscreen = true;
      shell.replaceChildren(frame);
    });
  });
});
