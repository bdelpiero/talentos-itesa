const path = require("path");

const config = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "bundle.js",
  },
  node: {
    module: "empty",
    dgram: "empty",
    dns: "mock",
    fs: "empty",
    http2: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(png|svg|ico|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,

    historyApiFallback: {
      index: "index.html",
    },
  },
  externals: [
      {'./cptable': 'var cptable'},
      {'./jszip': 'jszip'}
  ],
};

module.exports = config;
