const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  fr: 'fr',
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

module.exports = withBundleAnalyzer({});
