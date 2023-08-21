const express = require('express');
const { infoController, EmailController } = require('../../controllers');

const router = express.Router();

// router.get('/info', (req, res) => {
//     return res.json({msg:`successfully executed ${req}`});
// });

// optimize above code using controller

router.get('/info', infoController.info);
router.post('/tickets', EmailController.create);

module.exports = router;