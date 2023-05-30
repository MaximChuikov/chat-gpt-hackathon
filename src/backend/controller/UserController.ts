import User from "../models/User";
import UserRepository from "../repository/UserRepository";

class UserController {

    createUser(user : User){
        return UserRepository.saveUser(user)
    }
}

export default new UserController()