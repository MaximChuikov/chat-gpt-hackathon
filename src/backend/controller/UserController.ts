import User from "../models/User";
import UserRepository from "../repository/UserRepository";
import MainUser, {mainUser} from "../models/MainUser";
import Meme from "../models/Meme";
import {usersMock} from "../data";

class UserController {

    createUser(user : User){
        console.log(user)
        UserRepository.saveUser(user)
    }

    switchUser(user : User, check : boolean){
        user.isLike = check
        return UserRepository.saveUser(user)
    }

    getAllUncheckUser(){
        return UserRepository.getAllUser().filter(e => e.isLike === null)
    }

    getAllLikeUser(){
        return UserRepository.getAllUser().filter(e => e.isLike === true)
    }

    getAllUnlikeUser() {
        return  UserRepository.getAllUser().filter(e => e.isLike === false)
    }

    getUserById(userId : string){
        return UserRepository.getUser(userId)
    }

    createMainUser(mainUser : MainUser) : MainUser{
        return UserRepository.createMainUser(mainUser)
    }

    getMainUser() : MainUser{
        return UserRepository.getMainUser()
    }
    constructor() {
        for (let i = 0;  i < usersMock.length; i++){
            let t =this.createUser(usersMock[i])
            console.log(t)
        }
    }
}

export default new UserController()