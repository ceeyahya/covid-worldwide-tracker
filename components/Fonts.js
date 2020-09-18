const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,400;1,700;1,800&display=swap';
  link.rel = 'stylesheet preconnect';

  document.head.appendChild(link);

  const opensans = new FontFaceObserver('Open Sans');

  opensans.load().then(() => {
    document.documentElement.classList.add('opensans');
  });
};

export default Fonts;
