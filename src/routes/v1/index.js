const express = require('express');
const { infoController } = require('../../controllers');

const router = express.Router();

// router.get('/info', (req, res) => {
//     return res.json({msg:`successfully executed ${req}`});
// });

// optimize above code using controller

router.get('/info', infoController.info);

module.exports = router;