const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./app.js"],
  target: "node",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    rules: [{
        use: "babel-loader",
        exclude: /(node_modules)/,
        test: /\.js$/
      },
      {
        use: "css-loader",
        test: /\.css$/
      },
      {
        use: "sass-loader",
        test: /\.sass$/
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
        query: {
          interpolate: /<\$=([\s\S]+?)\$>/g,
          evaluate: /<\$([\s\S]+?)\$>/g
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: "production"
};