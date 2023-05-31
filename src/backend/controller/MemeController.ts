import MemeRepository from "../repository/MemeRepository";
import Meme from "../models/Meme";
import {memeMock, usersMock} from "../data";

class MemeController {
    createMeme(meme : Meme){
        return MemeRepository.saveMeme(meme)
    }

    switchMeme(meme : Meme, check : boolean){
        meme.isLike = check
        return MemeRepository.saveMeme(meme)
    }
    getAllUncheckMeme(){
        console.log(MemeRepository.getAllMeme())
        console.log(MemeRepository.getAllMeme().filter(e => e.isLike === null))
        return MemeRepository.getAllMeme().filter(e => e.isLike === null)
    }

    getAllLikeMeme(){
        return MemeRepository.getAllMeme().filter(e=>e.isLike === true)
    }

    getAllUnlikeMeme(){
        return MemeRepository.getAllMeme().filter(e=>e.isLike === false)
    }

    constructor() {
        for (let i = 0;  i < memeMock.length; i++){
            let t =this.createMeme(memeMock[i])
            console.log(t)
        }
    }

}
export default new MemeController()