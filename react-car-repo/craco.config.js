const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const resultConfig = {
        ...webpackConfig,
      };

      resultConfig.output.library = `ReactMicroAppCar`;
      resultConfig.output.libraryTarget = "umd";
      resultConfig.output.jsonpFunction = `webpackJsonp_ReactMicroAppCar`;

      resultConfig.resolve.alias = {
        ...resultConfig.resolve.alias,
        "@": path.resolve(__dirname, "src"),
      };

      return resultConfig;
    },
  },

  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    const resultConfig = {
      ...devServerConfig,
    };
    // 关闭主机检查，使微应用可以被 fetch
    resultConfig.disableHostCheck = true;
    // 配置跨域请求头，解决开发环境的跨域问题
    resultConfig.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    // 配置 history 模式
    resultConfig.historyApiFallback = true;
    return resultConfig;
  },
};
