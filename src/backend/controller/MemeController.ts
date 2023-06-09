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
        return MemeRepository.getAllMeme().filter(e => e.isLike == null)
    }

    getAllLikeMeme(){
        return MemeRepository.getAllMeme().filter(e=>e.isLike == true)
    }

    getAllUnlikeMeme(){
        return MemeRepository.getAllMeme().filter(e=>e.isLike == false)
    }

    constructor() {
        if(MemeRepository.getAllMeme() !== null) {
            for (let i = 0; i < memeMock.length; i++) {
                let t = this.createMeme(memeMock[i])
            }
        }
    }

}

export default new MemeController()