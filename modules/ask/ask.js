const fs        = require('fs');
const express   = require('express');
const path      = require('path');

let router = express.Router();

router.get('/', (req,res) => {
  res.render('question' , {
    action: '/api/question'
  });
});

module.exports = router;
