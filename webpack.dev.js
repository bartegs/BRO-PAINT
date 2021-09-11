const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const webpack = require("webpack");


module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist/apps/employee/"),
    historyApiFallback: true,
    writeToDisk: true,
    compress: true,
    open: true,
    port: 9000,
    openPage: 'pracownik',
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
