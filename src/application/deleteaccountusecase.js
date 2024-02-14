const UserRepository = require('../data/userrepo');
const jwt = require("jsonwebtoken");
function deleteaccountusecase(req,res) {
    try {
        const token = req.cookies.jwt;
        jwt.verify(token, 'supersecret', async(err, decodedToken) => {
          if(err) {
            return res.status(400).json({error : err.message});
          } else {
              const username = decodedToken.username;
              const users = UserRepository.remove(username);
              return res.status(200).json({remaining_users: users});
          }
        });
      } catch (error) {
        return res.status(400).json({error: error.message});
      }
}


module.exports = { deleteaccountusecase };