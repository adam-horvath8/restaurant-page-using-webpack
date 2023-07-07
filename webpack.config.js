const path = require("path");
module.exports = {
  mode: "development", // Enclose the mode value in quotes
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/template.html",
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
};
``;
