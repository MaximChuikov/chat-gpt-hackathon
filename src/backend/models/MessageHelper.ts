import User from "./User";

export default interface MessageHelper {
    id : string
    user : User
    context : string
    isComplite : Boolean

}