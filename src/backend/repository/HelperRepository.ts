import StorageRep from "./StorageRep";
import MessageHelper from "../models/MessageHelper";

class HelperRepository {

    saveHelper(message : MessageHelper){
        const storage = StorageRep.getStorage<MessageHelper>("helperMessage") as Map<string,MessageHelper>
        storage.set(message.id, message)
        StorageRep.saveStorage<Map<string,MessageHelper>>("helperMessage",storage)
    }

    getHelper(messageId : string){
        const helpers = StorageRep.getStorage<MessageHelper>("helperMessage") as Map<string,MessageHelper>
        // @ts-ignore
        return activities[activityId]
    }

    getAllHelpers() : Array<MessageHelper>{
        let map : Map<string,MessageHelper> = new Map(Object.entries(JSON.parse(localStorage.getItem("helperMessage") || "{}")));
        return Array.from(map, ([key,value]) => (value ));
    }
}

export default new HelperRepository()