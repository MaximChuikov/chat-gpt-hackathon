import User from "../models/User";
import StorageRep from "./StorageRep";
import Activity from "../models/Activity";
import Meme from "../models/Meme";

class UserRepository {

    saveUser(user : User){
        const storage = StorageRep.getStorage<User>("user") as Map<string,User>
        storage.set(user.id, user)
        StorageRep.saveStorage<Map<string,User>>("user",storage)
    }

    getAllUser() : Array<User>{
        let map : Map<string,User> = new Map(Object.entries(JSON.parse(localStorage.getItem("user") || "{}")));
        return Array.from(map, ([key,value]) => (value ));
    }

}

export default new UserRepository()