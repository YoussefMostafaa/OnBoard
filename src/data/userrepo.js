var users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

function save(user) {
    users.push(user);
    console.log(users);
}
function getusers(){
    return users;

}
function remove(username){
    users = users.filter(user => user.username !== username);
    return users;
}



module.exports = { save ,users,remove,getusers};
