const router = require('express').Router();

router.use('/bicycle', require('./bicycle'));

module.exports = router;
