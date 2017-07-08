const express = require('express');
const path = require('path');

let router = express.Router();

let fileMenu = path.join(__dirname, '../../public/menu.html');

router.use(express.static('public'));

router.get('/', (req,res) => {
  res.sendFile(fileMenu);
});

module.exports = router;
