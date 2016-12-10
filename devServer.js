var path = require("path");
var express = require("express");
var webpack = require("webpack");
var webpackMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var config = require("./webpack/webpack.dev.config.js");

var app = express();
var compiler = webpack(config);

app.use(express.static(__dirname + '/docs'));

if (process.env.NODE_ENV !== 'production') {
  console.log('not production');
  app.use(webpackMiddleware(compiler, {
    contentBase: 'build',
  	stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'docs', 'index.html'));
})

app.listen(8080, function(err) {
	if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Server listening on port %s', 8080);
  }
});
