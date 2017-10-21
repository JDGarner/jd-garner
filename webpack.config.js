const path = require("path");
const webpack = require("webpack");

const PATHS = {
  dist: path.join(__dirname, "dist"),
  src: path.join(__dirname, "src")
};

const config = {
  devtool: "eval-source-map",
  entry: PATHS.src + "/entrypoint.js",
  output: {
    path: PATHS.dist,
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.src,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "node_modules/normalize.css"),
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        include: PATHS.src,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: PATHS.dist,
    port: 3000
  }
};
module.exports = config;
