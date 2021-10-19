// import Splide from '@splidejs/splide';

// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('.splide', {
//     autoplay: true,
//     interval: 5000
//   }).mount();


document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.sketchGallery', {
    autoplay: true,
    type: 'loop',
    interval: 4000,
    easing: 'ease',
    resetProgress: true,
    lazyLoad: 'nearby',
    drag: true,
    gap: '1em',
    // padding: '5rem',
    // padding: { left: 1, right: 1 },
    padding: '28%',

    // arrowPath: 'm15.5 0.932-4.3 4.38...',

    arrows: 'slider',

    pagination: false,
    trimSpace: false, // false leaves space to left of first item
    // fixedWidth:'300px',
    // fixedHeight: '400px',
    width: '100%', // width of the entire slider itself
    speed: 600 // speed of transition

  } ).mount();
} );
