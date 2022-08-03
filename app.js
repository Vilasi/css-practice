let googleFonts = document.getElementById('google-fonts');

googleFonts.addEventListener('click', () => {
  window.open('https://fonts.google.com/');
});

let cssTricks = document.getElementById('css-tricks');

cssTricks.addEventListener('click', () => {
  window.open('https://css-tricks.com/guides/');
});

let mdnDocs = document.getElementById('mdn-flexbox');

mdnDocs.addEventListener('click', () => {
  window.open(
    'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
  );
});

// Saving this for later reference
console.log(document.querySelector('#google-fonts'));
