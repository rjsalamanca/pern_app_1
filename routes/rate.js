const express = require('express'),
  router = express.Router();
  classRankings = require('../models/class_rankings');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const allClassTopics = await classRankings.getAllTopics();
  const allSelfRanks = await classRankings.getSelfRank();

  res.render('template', { 
    locals:{
      title: 'Class Rankings',
      classTopics: allClassTopics,
      selfRanks: allSelfRanks
    },
    partials:{
      partial: 'partial-rankings'
    }
  });
});

router.post('/', async (req,res) => {
  const allClassTopics = await classRankings.getAllTopics();

  const { rankObj } = req.body;
  let rankJSON = JSON.parse(rankObj);
  
  Object.keys(rankJSON).forEach(async (key)=>{
    await classRankings.addRankings(`'${key}'`,parseInt(rankJSON[key])+1);
  });

  const allSelfRanks = await classRankings.getSelfRank();

  res.status(200).render('template', {
    locals: {
        title: 'UPDATED PAGE!',
        classTopics: allClassTopics,
        selfRanks: allSelfRanks
      },
        partials: {
          partial: 'partial-rankings'
        }
  });
});

module.exports = router;