import User from "../models/User";
import StorageRep from "./StorageRep";
import Activity from "../models/Activity";

class UserRepository {

    saveUser(user : User){
        const storage = StorageRep.getStorage<User>("user") as Map<string,User>
        storage.set(user.id, user)
        StorageRep.saveStorage<Map<string,User>>("user",storage)
    }


}

export default new UserRepository()