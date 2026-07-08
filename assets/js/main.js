document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    document.querySelectorAll(".editorial-item img").forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = img.src;
        lightbox.classList.add("open");
      });
    });
    lightbox.addEventListener("click", function () {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.classList.remove("open");
        lightboxImg.src = "";
      }
    });
  }

  // Graceful image fade-in: only touch images still loading, so the page
  // degrades cleanly without JS (images just show normally).
  var fadeImgs = document.querySelectorAll(".editorial-item img, .case-media img");
  fadeImgs.forEach(function (img) {
    if (img.complete && img.naturalWidth !== 0) {
      return;
    }
    img.classList.add("img-fade");
    var markLoaded = function () {
      img.classList.add("is-loaded");
    };
    img.addEventListener("load", markLoaded);
    img.addEventListener("error", markLoaded);
  });

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }
});
