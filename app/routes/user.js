const express = require('express');
const router = express.Router();
const user = require('../controller/user')

router.get('/getUser', user.getUser);
router.get('/getBy', user.getBy);
router.get('/create', user.createUser);

module.exports = router;