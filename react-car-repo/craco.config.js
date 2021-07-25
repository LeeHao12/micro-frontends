module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // override webpack config
      return webpackConfig;
    },
  },
};
