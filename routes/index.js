const express = require('express'),
  router = express.Router();
  classRankings = require('../models/class_rankings');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const allClassTopics = await classRankings.getAllTopics();

  res.render('template', { 
    locals:{
      title: 'Welcome!',
      classTopics: allClassTopics
    },
    partials:{
      partial: 'partial-rankings'
    }
  });
});

module.exports = router;