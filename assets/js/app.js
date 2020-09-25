$(document).ready(function() {

  'use strict';

  $('body').addClass('js-enabled');

 

  $('.js-header').headroom({
    tolerance: {
      down : 10,
      up : 20
    },
    classes: {
      initial:  'js-header--headroom',
      top:      'js-header--top',
      notTop:   'js-header--not-top',
      pinned:   'js-header--pinned',
      unpinned: 'js-header--unpinned'
    }
  });

 

  $('.js-nav-toggle').click(function(e) {
    e.preventDefault();
    $('.c-nav-wrap').toggleClass('is-active');
    $(this).toggleClass('c-nav-toggle--close');
  });

  
});