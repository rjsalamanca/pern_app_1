const express = require('express'),
  router = express.Router();
  classRankings = require('../models/class_rankings');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const allClassTopics = await classRankings.getAllTopics();
  const allSelfRanks = await classRankings.getSelfRank();

  console.log(allSelfRanks.rows[0])

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

  console.log(req.body)
  // const allClassTopics = await classRankings.getAllTopics();

  // const { rankObj } = req.body;
  // let rankJSON = JSON.parse(rankObj);

  // await Object.keys(rankJSON).forEach(async (key)=>{
  //   classRankings.addRankings(`'${key}'`,parseInt(rankJSON[key])+1);
  // });

  // const allSelfRanks = await classRankings.getSelfRank();

  // await res.status(200).render('template', {
  //   locals: {
  //       title: 'UPDATED PAGE!',
  //       classTopics: allClassTopics,
  //       selfRanks: allSelfRanks
  //     },
  //       partials: {
  //         partial: 'partial-rankings'
  //       }
  // });
});

module.exports = router;