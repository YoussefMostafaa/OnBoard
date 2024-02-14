const UserRepository = require('../data/userrepo');

function getusersusecase() {
    return UserRepository.getusers();
}

module.exports = { getusersusecase };
