import Activity from "./Activity";

export default interface User {

    id : string
    name : string,
    contact : string,
    mail : string,
    description : string,
    faculty? : string,
    group? : string,
    subscriptions: Map<string,Activity>
    myActivity : Map<string,Activity>
}
