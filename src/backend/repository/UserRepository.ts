import User from "../models/User";
import StorageRep from "./StorageRep";
import Activity from "../models/Activity";
import Meme from "../models/Meme";
import MainUser from "../models/MainUser";

class UserRepository {

    saveUser(user : User){
        const storage = StorageRep.getStorage<User>("user") as Map<string,User>
        console.log(storage)
        // @ts-ignore
        storage[user.id] = user
        StorageRep.saveStorage<Map<string,User>>("user",storage)
    }

    getAllUser() : Array<User>{
        let map : Map<string,User> = new Map(Object.entries(JSON.parse(localStorage.getItem("user") || "{}")));
        return Array.from(map, ([key,value]) => (value ));
    }

    getUser(userId : string) {
        let map : Map<string,User> = new Map(Object.entries(JSON.parse(localStorage.getItem("user") || "{}")));
        // @ts-ignore
        return map[userId]
    }

    createMainUser(mainUser : MainUser) : MainUser{
        localStorage.setItem("mainUser",JSON.stringify(mainUser))
        return JSON.parse(localStorage.getItem("mainUser") || "{}") as MainUser
    }

    getMainUser(){
        return JSON.parse(localStorage.getItem("mainUser") || "{}") as MainUser
    }

    constructor() {
        //localStorage.setItem("user",JSON.stringify(usersMock))
    }
}

export default new UserRepository()