
const User = require('./../../app/models/User')
describe("Unit test for user class", () =>{

    test("Create an instasnce of user ", () =>{

        const user1 = new User (1,'Vicvaporu','Victor','Bio')
            
        expect(user1.id).toBe(1)
        expect(user1.username).toBe('Vicvaporu')
        expect(user1.name).toBe('Victor')
        expect(user1.bio).toBe('Bio')
        expect(user1.dateCreated).not.toBeUndefined()
        expect(user1.lastUpdated).not.toBeUndefined()

    })

    test("Add getters", ()=>{

        const user2 = new User (2,'Lalo','Eduardo','Bio')
        expect(user2.getUserName).toBe('Lalo');
        expect(user2.getBio).toBe('Bio');
        expect(user2.getDateCreated).not.toBeUndefined();
        expect(user2.getLastUpdate).not.toBeUndefined();


    })

    test("Add setters",()=>{
        const user2 = new User (2,'Lalo','Eduardo','Bio')

        user2.setUserName = "Ed"
        expect(user2.username).toBe("Ed")

        user2.setBio = "New Bio"
        expect(user2.bio).toBe("New Bio")

    })
    
})