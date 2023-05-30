import User from "./User";

export default interface MessageHelper {
    id : string
    user : User
    category: Array<string>
    context : string
    isComplete : boolean

}