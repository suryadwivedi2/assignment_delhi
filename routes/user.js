const express = require('express');
const router = express.Router();
const usercontroller=require('../controllers/user')

router.get('/country-tags', usercontroller.getdata)




module.exports = router;