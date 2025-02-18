const checkToken = require('../middleware/Auth');
const { find, insert, del, modify,reset } = require('../controller/recordcontroller');
const router = require('express').Router();

router.get('/get', checkToken, find);
router.post('/add', checkToken, insert);

router.delete('/remove', checkToken, del);


module.exports = router;