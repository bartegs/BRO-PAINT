const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist/apps/client/"),
    historyApiFallback: true,
    writeToDisk: true,
    compress: true,
    open: true,
    port: 9000,
    // openPage: 'pracownik',
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
