import UserController from "./controller/UserController";
import {memeMock, usersMock} from "./data";
import MemeController from "./controller/MemeController";

for (let i = 0;  i < usersMock.length; i++){
    let t =UserController.createUser(usersMock[i])
    console.log(t)
}

for (let i = 0;  i < memeMock.length; i++){
    let t =MemeController.createMeme(memeMock[i])
    console.log(MemeController.getAllUncheckMeme())
}