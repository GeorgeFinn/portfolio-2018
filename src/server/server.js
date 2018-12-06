const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const path = require("path");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

//and create our instances
const projects = require("./routes/api/projects");
const webpackConfig = require("../../webpack.config");

//set our port to either a predetermined port number if you have set
const port = process.env.PORT || 8080;
const compiler = webpack(webpackConfig);

/*
 * Configure Mongoose
*/
mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${
      process.env.MONGO_PASS
    }@ds159997.mlab.com:59997/portfolio2018`,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
/*
 * Configure Express
*/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
 * Configure Middleware
*/

const isProd = process.env.NODE_ENV === "production"

if(!isProd) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, "dist"),
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
  );
  app.use(webpackHotMiddleware(compiler));
} else {
  // const staticMiddleware = express.static("dist")
  // app.use(staticMiddleware)
  const expressStaticGzip = require("express-static-gzip")
  app.use(expressStaticGzip("dist", {
    enableBrotli: true
  }))
}
// Use routes
app.use("/api/projects", projects);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../dist/index.html"));
});
//starts the server and listens for requests
app.listen(port);
console.log(`api running on port ${port}`);
