import express from "express"
const app = express();
import path from "path"
import mongoose from "mongoose"
import bodyParser from "body-parser"

//and create our instances
const projects = require("./routes/api/projects");
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
 * Configure Middleware
*/

const isProd = process.env.NODE_ENV === "production";
if (!isProd) {
  const webpack = require("webpack");
  const config = require("../../config/webpack.dev.js");
  const compiler = webpack(config);

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  );

  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  );

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddlware);
  console.log("Middleware enabled")
}
  // const staticMiddleware = express.static("dist")
  // app.use(staticMiddleware)
const expressStaticGzip = require("express-static-gzip")
app.use(expressStaticGzip("dist", {
  enableBrotli: true
}))
// Use routes
app.use("/api/projects", projects);
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});
