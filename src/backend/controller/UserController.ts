import User from "../models/User";
import UserRepository from "../repository/UserRepository";

class UserController {

    createUser(user : User){
        return UserRepository.saveUser(user)
    }

    switchUser(user : User, check : boolean){
        user.isLike = check
        return UserRepository.saveUser(user)
    }

    getAllUncheckUser(){
        return UserRepository.getAllUser().find(e => e.isLike === null)
    }

    getAllLikeUser(){
        return UserRepository.getAllUser().find(e => e.isLike === true)
    }

    getAllUnlikeUser() {
        return  UserRepository.getAllUser().find(e => e.isLike === false)
    }

    getUserById(userId : string){
        return UserRepository.getUser(userId)
    }

}

export default new UserController()