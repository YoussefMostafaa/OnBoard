//const jwt = require("jsonwebtoken");

function logoutusecase(req,res){
  

    const token = req.cookies.jwt;
    if (!token){
        return res.status(400).json({error:"You're Not Signed in to Logout !!"});
    } else {
        res.clearCookie('jwt');
        return res.status(200).json({error : "Successfully Logged Out "})};
}


module.exports = { logoutusecase }; 