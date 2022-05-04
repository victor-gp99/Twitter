
const UserService = require('./../../app/services/UserService')

describe("1) Test for userservices", ()=>{
    test("1. Create a new user using the UserServices", ()=>{
        
        const user1 = UserService.create(1, "vickvaporu", "Victor")
        
        expect(user1.username).toBe("vickvaporu")
        expect(user1.name).toBe("Victor")
        expect(user1.id).toBe(1)
        expect(user1.bio).not.toBeUndefined()


    })

    test("2) Get all user data in a list",()=>{
        const user2 = UserService.create(2, "Lalo", "Eduardo")
        const userInfoList = UserService.getInfo(user2)
        expect(userInfoList[0]).toBe(2)
        expect(userInfoList[1]).toBe("Lalo")
        expect(userInfoList[2]).toBe("Eduardo")
        expect(userInfoList[3]).toBe("sin bio")

    })
    test("3) Update username", () => {
        const user3 = UserService.create(3, "Lalo", "Eduardo")
        UserService.updateUserUsername(user3, "Lalo")
        expect(user3.username).toBe("Lalo")
      })
    
      test("4) Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "vickvaporu1", "Victor")
        const user2 = UserService.create(2, "vickvaporu2", "Victor")
        const user3 = UserService.create(3, "vickvaporu3", "Victor")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("vickvaporu1")
        expect(usernames).toContain("vickvaporu2")
        expect(usernames).toContain("vickvaporu3")
      })

})