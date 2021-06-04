const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "./apps/client/src/"),
    compress: true,
    port: 9000,
  },
});
