const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Neuton:ital,wght@0,400;0,700;0,800;1,400&display=swap';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const lato = new FontFaceObserver('Lato');

  lato.load().then(() => {
    document.documentElement.classList.add('lato');
  });
};

export default Fonts;
