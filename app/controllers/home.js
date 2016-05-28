var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: "Chris O'Connell",
      articles: articles
    });
});

router.get('/banjo', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('banjo', {
      title: "Chris O'Connell - Ban.jo",
      articles: articles
    });
});

router.get('/withme', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('withme', {
      title: "Chris O'Connell - WithMe",
      articles: articles
    });
});

router.get('/contact', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('contact', {
      title: "Chris O'Connell - Contact",
      articles: articles
    });
});

router.get('*', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('404', {
      title: "Chris O'Connell - 404",
      articles: articles
    });
});
