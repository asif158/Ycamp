const express = require("express");
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/usersController');
const catchAsync =require('../utils/catchAsync');


router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLogin)
    .post(
        passport.authenticate(
            'local', 
            {failureFlash:true, 
                failureRedirect:'/login',
                keepSessionInfo:true}), 
        catchAsync(users.login))

router.get('/logout', users.logout)


module.exports = router;
