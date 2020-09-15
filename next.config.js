const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  ar: 'ar',
  fr: 'fr',
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
