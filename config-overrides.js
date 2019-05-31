const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// const path = require("path");

const addMyPlugin = config => {
  config.devtool =
    process.env.NODE_ENV === "development" ? "cheap-module-source-map" : false;
  return config;
};

const addAliasPath = config => {
  config.plugins.push(new TsconfigPathsPlugin({}));
  return config;
};

module.exports = override(
  addMyPlugin,
  addAliasPath,
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1890ff" }
  })
);
