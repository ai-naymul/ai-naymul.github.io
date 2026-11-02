// theme switch
(function () {
  var b = document.querySelector('[data-themer]');
  if (!b) return;
  var set = function (t) {
    document.documentElement.setAttribute('data-theme', t);
    b.setAttribute('aria-pressed', t === 'dark');
    b.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' theme');
    try { localStorage.setItem('theme', t); } catch (e) {}
  };
  set(document.documentElement.getAttribute('data-theme') || 'light');
  b.addEventListener('click', function () {
    set(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();

// rotating photo
(function () {
  var box = document.querySelector('[data-photos]');
  if (!box) return;
  var shots = box.querySelectorAll('img');
  if (shots.length < 2) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var i = 0, held = false;
  box.addEventListener('pointerenter', function () { held = true; });
  box.addEventListener('pointerleave', function () { held = false; });
  // the others are not fetched until the page is quiet, so the first view stays small
  var wake = function () {
    for (var k = 1; k < shots.length; k++) {
      if (shots[k].dataset.src) { shots[k].src = shots[k].dataset.src; delete shots[k].dataset.src; }
    }
  };
  setTimeout(wake, 3000);
  setInterval(function () {
    if (held || document.hidden) return;
    shots[i].classList.remove('is-on');
    i = (i + 1) % shots.length;
    shots[i].classList.add('is-on');
  }, 6000);
})();

// pictures: reveal each one when it has actually decoded
(function () {
  var imgs = document.querySelectorAll('.shot img, .pipe__img');
  for (var i = 0; i < imgs.length; i++) {
    (function (im) {
      if (im.complete) { im.classList.add('is-ready'); return; }
      im.addEventListener('load', function () { im.classList.add('is-ready'); });
      im.addEventListener('error', function () { im.classList.add('is-ready'); });
    })(imgs[i]);
  }
})();

// entrances
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var bits = document.querySelectorAll('.rise');
  if (!('IntersectionObserver' in window)) { bits.forEach(function (b) { b.classList.add('is-in'); }); return; }
  var show = function (el) { el.classList.add('is-in'); };
  // safety net: nothing stays invisible, whatever happens to the observer
  setTimeout(function () { bits.forEach(show); }, 2500);
  var io = new IntersectionObserver(function (rows) {
    rows.forEach(function (r, n) {
      if (!r.isIntersecting) return;
      setTimeout(function () { r.target.classList.add('is-in'); }, n * 70);
      io.unobserve(r.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  bits.forEach(function (b) { io.observe(b); });
})();
