const webpack = require("webpack");
const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "node",
  entry: "./client/client.jsx",
  //server side rendering configuraiton
  // ssrIndexJs: resolveApp("src/index.server.js"),
  // ssrBuild: resolveApp("dist"),
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
