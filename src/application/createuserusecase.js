const User = require('../core/user');
const UserRepository = require('../data/userrepo');
const {users} = require('../data/userrepo');
function createuserusecase(username, password) {
    const user = new User((UserRepository.getusers().length+1),username, password);
    UserRepository.save(user);
    return user;
}

module.exports = { createuserusecase };
