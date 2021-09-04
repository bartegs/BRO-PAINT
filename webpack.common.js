const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    client: "./apps/client/src/index.tsx",
    employee: "./apps/employee/src/index.tsx",
  },
  output: {
    filename: "[name]/[name].[fullhash:5].js",
    path: path.resolve(__dirname, "dist/apps"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./apps/client/src/index.html",
      filename: "client/index.html",
      favicon: "./apps/assets/icons/favicon.png",
      chunks: ["client"],
    }),

    new HtmlWebpackPlugin({
      template: "./apps/employee/src/index.html",
      filename: "employee/index.html",
      favicon: "./apps/assets/icons/favicon.png",
      chunks: ["employee"],
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
