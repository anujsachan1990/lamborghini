module.exports = {

  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module:{
    loader:[
      {
        test:/\.js$/,
        loader:'babel-loader'

      }

    ]
  }
};