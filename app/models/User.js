class User {

    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated =  new Date;
        this.lastUpdated = new Date;
    }

    get getUserName(){
        return this.username;
    }
    get getBio(){
        return this.bio;
    }
    get getDateCreated(){
        return this.dateCreated;
    }
    get getLastUpdate(){
        return this.lastUpdated;
    }

    /**
     * @param {string} _newName
     */
    set setUserName(_newName){
        this.username = _newName
    }

    /**
     * @param {string} _newBio
     */
    set setBio(_newBio){
        this.bio = _newBio
    }


}
    module.exports = User;
