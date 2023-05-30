import Activity from "./Activity";

export default interface User {

    id : string
    name : string,
    contact : string,
    mail : string,
    description : string,
    url : string
    isLike? : boolean
    gender : boolean
    myActivity : Map<string,Activity>
}
