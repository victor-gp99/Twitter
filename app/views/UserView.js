const UserService = require('./../services/UserService')

class UserView{

  static createUser(payload){
    //si payload es nulo o inexistente
    if(payload === null){
        return {error: "El payload es iguala null"}
        //verificando tipado de las propiedades de UserService con typeof
    } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
        return UserService.create(payload.id, payload.username, payload.name)
    } else{
      return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
    }
  }
}

module.exports = UserView