const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

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
    // host: '0.0.0.0',
  },
});
