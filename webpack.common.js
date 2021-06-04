const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    client: "./apps/client/src/index.tsx",
    worker: "./apps/worker/src/index.tsx",
  },
  output: {
    filename: "[name]/[name].[hash:5].js",
    path: path.resolve(__dirname, "dist/apps"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./apps/client/src/index.html",
      filename: "client/index.html",
      chunks: ["client"],
    }),

    new HtmlWebpackPlugin({
      template: "./apps/worker/src/index.html",
      filename: "worker/index.html",
      chunks: ["worker"],
    }),
    new CleanWebpackPlugin(),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
