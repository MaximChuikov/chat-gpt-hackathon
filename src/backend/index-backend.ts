import UserController from "./controller/UserController";
import {usersMock} from "./data";

for (let i = 0;  i < usersMock.length; i++){
    let t =UserController.createUser(usersMock[i])
    console.log(t)
}