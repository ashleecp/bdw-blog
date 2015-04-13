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

      res.send('article/list', {
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
