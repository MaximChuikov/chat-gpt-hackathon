import User from "../models/User";
import UserRepository from "../repository/UserRepository";
import Activity from "../models/Activity";
import ActivityRepository from "../repository/ActivityRepository";

class UserController {

    createUser(user : User){
        return UserRepository.saveUser(user)
    }

    getAllUncheckUSer(){
        return UserRepository.getAllUser().map(e => e.isLike === null)
    }

    switchUser(user : User, check : boolean){
        user.isLike = check
        return UserRepository.saveUser(user)
    }

}

export default new UserController()