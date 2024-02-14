const jwt = require("jsonwebtoken");
const { getusersusecase } = require( "./getusersusecase");

function loginusecase(username, pass,res) {

    const createToken = (data) => {
        const Token = () => {
            const maxAge = 3 * 24 * 60 * 60;
            return jwt.sign(data, 'supersecret', {
                expiresIn: maxAge
            });
        }
        return Token();
    };
    let users = getusersusecase();
    let user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }else
    if(user.password !== pass) {
        return res.status(400).json({ error: "Password not correct"});
    }
    else
     {
        const tokenData = {
            id: user.id,
            username: user.username,
            password: user.password
        }
        const token = createToken(tokenData);
        const maxAge = 3 * 24 * 60 * 60;
       res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000,sameSite: "none", secure: true });
        return res.status(200).json({token: tokenData , message: "Login successful"});  
      }

    
}

module.exports = { loginusecase };