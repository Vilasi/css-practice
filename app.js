let googleFonts = document.getElementById('google-fonts');
let cssTricks = document.getElementById('css-tricks');
let mdnDocs = document.getElementById('mdn-flexbox');
let media = document.getElementById('media');
let breakpoints = document.getElementById('breakpoints');

googleFonts.addEventListener('click', () => {
  window.open('https://fonts.google.com/');
});

cssTricks.addEventListener('click', () => {
  window.open('https://css-tricks.com/guides/');
});

mdnDocs.addEventListener('click', () => {
  window.open(
    'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
  );
});

media.addEventListener('click', () => {
  window.open('https://developer.mozilla.org/en-US/docs/Web/CSS/@media');
});

breakpoints.addEventListener('click', () => {
  window.open(
    'https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/'
  );
});

// Saving this for later reference
console.log(document.querySelector('#google-fonts'));
