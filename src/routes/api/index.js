const router = require('express').Router();
const todos = require('./todos');

router.use('/todo', todos);

module.exports = router;