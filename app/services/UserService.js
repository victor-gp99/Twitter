const User = require("./../models/User")

class UserService {
    static create (id, username, name){
        return new User (id, username, name, "sin bio")
    }

    static getInfo(user){
        return Object.values(user)
    }
    static updateUserUsername(user, username){
        user.setUsername = username
      }
      
      static getAllUsernames(users){
        const usersUsernames = users.map( user => user.username)
        return usersUsernames
      }
    

}

module.exports = UserService