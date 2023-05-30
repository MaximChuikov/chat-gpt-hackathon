import MemeRepository from "../repository/MemeRepository";
import Meme from "../models/Meme";
import Activity from "../models/Activity";
import ActivityRepository from "../repository/ActivityRepository";

class MemeController {
    createMeme(meme : Meme){
        return MemeRepository.saveMeme(meme)
    }

    switchMeme(meme : Meme, check : boolean){
        meme.isLike = check
        return MemeRepository.saveMeme(meme)
    }
    getAllUncheckMeme(){
        return MemeRepository.getAllMeme().map(e => e.isLike === null)
    }
}
export default new MemeController()