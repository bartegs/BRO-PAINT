const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: process.env.NODE_ENV || "production",
  output: {
    filename: "[name].[hash:5].js",
    path: path.resolve(__dirname, "dist/client"),
  },
});
