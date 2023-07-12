// Assign post in JS to post from CSS

let container = document.querySelector('.container');

// Initialize Isotope with vanilla JavaScript

let iso = new Isotope( '.container', {
    // Isotope options...

    // Select none at fist.
    itemSelector: 'none',
    masonry: {
      // use element for option
      columnWidth: '.post',
    }
  });

// Use imagesLoaded to properly append posts for masonry to be compatible with InfiniteScroll
// initial items reveal
// Old imageLoaded Script, we now wrap the imageLoaded script around the Isotope script

imagesLoaded( container, function() {
    container.classList.remove('are-images-unloaded');
    iso.options.itemSelector = '.post';
    let items = container.querySelectorAll('.post');
    iso.appended( items );
  });

// Initialize Infinite Scroll with vanilla JavaScript

let elem = document.querySelector('.container');
let infScroll = new InfiniteScroll( elem, {
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
  // This outlayer links the Infinite Scroll to Isotope
  outlayer: iso,
});
