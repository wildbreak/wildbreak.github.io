// Simple gallery script: switches main image when a thumbnail is clicked
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-gallery]').forEach(function(gallery) {
    var main = gallery.querySelector('.gallery-main');
    var thumbs = gallery.querySelectorAll('.thumb');
    thumbs.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var idx = btn.getAttribute('data-index');
        var newImg = btn.querySelector('img').getAttribute('src');
        if (main && newImg) {
          main.setAttribute('src', newImg);
          // update aria/current thumb
          thumbs.forEach(function(t){ t.classList.remove('active'); t.setAttribute('aria-current','false'); });
          btn.classList.add('active');
          btn.setAttribute('aria-current','true');
        }
      });
    });
  });
});
