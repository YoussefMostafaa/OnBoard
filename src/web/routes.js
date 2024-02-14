const express = require('express');
const cookieParser = require('cookie-parser'); 
const { createuserusecase } = require('../application/createuserusecase');
const { getusersusecase } = require('../application/getusersusecase');
const { loginusecase } = require('../application/loginusecase');
const { logoutusecase } = require('../application/logoutusecase');
const { deleteaccountusecase } = require('../application/deleteaccountusecase');
const router = express.Router();
router.use(cookieParser()); 

router.post('/createuser', (req, res) => {
    const { username, password } = req.body;
    const user = createuserusecase(username, password);
    res.json(user);
});

router.get('/users', (req, res) => {
    const users = getusersusecase();
    res.json(users);
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    loginusecase(username, password,res);
});

router.post('/logout', (req, res) => {
    logoutusecase(req,res);
});

router.delete('/deleteaccount', (req, res) => {
    deleteaccountusecase(req,res);
});

// router.get('/', (req, res) => {
//     res.sendFile('home.html', { root: __dirname + '/' })
// });


module.exports = router;
