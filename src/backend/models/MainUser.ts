import Meme from "./Meme";

interface MainUser {
    name : string
    description : string
    memes : Array<Meme>
    urls : Array<string>
    avatar : string
}

export let mainUser : MainUser = {
    name : "Надежда",
    description : "Хочу уйти из команды спермобаков",
    memes : new Array<Meme>(),
    urls : new Array<string>(),
    avatar : "Аватарка в виде котика"
}