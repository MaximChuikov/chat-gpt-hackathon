import User from "./User";

export default interface Activity {
    id: string
    title : string
    organizers? : User
    description : string
    isActive : boolean
    isLike? : boolean
    users? : Map<string,User>
}

const test = {
    id : "1",
    title: "title",
    isActive : true,
    organizers : [
        {
            id: "1",
            name : "name",
            contact: "7999999999",
            mail: "mail",
            cash : 0
        }
    ]
}