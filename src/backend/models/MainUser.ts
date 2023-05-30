import Meme from "./Meme";

export default interface MainUser {
    name : string
    description : string
    memes : Array<Meme>
    urls : Array<string>
    avatar : string
}

export let mainUser : MainUser