var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');
  // posts = require('../../config/posts');

module.exports = function (app) {
  app.use('/article', router);
};

router.get('/', function (req, res, next) {

    Article.find({}, function(err, articles){
      console.log('articles: ', articles);

      res.render('article/list', {
      title: 'My Articles',
      articles: articles
      });
    });        
});

router.get('/:id', function (req, res, next) {

    var id = req.params.id;
    
    Article.findOne({ _id:id }, function(err, articles){
      

      res.render('article/show', {
      title: 'My Articles',
      articles: articles
      });
    });        
});

// router.get('/bootstrap', function(req, res, next) {
    
//     Article.create(posts.posts, function(err, articles){
//       if(err) return next(err);
//       res.send(articles);
//     });

  
// });
