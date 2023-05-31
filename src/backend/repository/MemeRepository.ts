import StorageRep from "./StorageRep";
import Meme from "../models/Meme";
import {usersMock} from "../data";

class MemeRepository{
    saveMeme(meme : Meme){
        const storage = StorageRep.getStorage<Meme>("meme") as Map<string,Meme>
        // @ts-ignore
        storage[meme.id] = meme
        StorageRep.saveStorage<Map<string,Meme>>("meme",storage)
    }

    getAllMeme(){
        let map : Map<string,Meme> = new Map(Object.entries(JSON.parse(localStorage.getItem("meme") || "{}")));
        return Array.from(map, ([key,value]) => (value ));
    }
    constructor() {
        //localStorage.setItem("meme",JSON.stringify(memesMock))
    }
}

export default new MemeRepository()