import Activity from "../models/Activity";
import StorageRep from "./StorageRep";
import MessageHelper from "../models/MessageHelper";
import {usersMock} from "../data";

class ActivityRepository {

    saveActivity(activity : Activity){
        const storage = StorageRep.getStorage<Activity>("activity") as Map<string,Activity>
        storage.set(activity.id, activity)
        StorageRep.saveStorage<Map<string,Activity>>("activity",storage)
    }

    getActivity(activityId : string) : Activity{
        const activities = StorageRep.getStorage<Activity>("activity") as Map<string,Activity>
        // @ts-ignore
        return activities[activityId]
    }

    getAllActivity() : Array<Activity>{
        let map : Map<string,Activity> = new Map(Object.entries(JSON.parse(localStorage.getItem("activity") || "{}")));
        return Array.from(map, ([key,value]) => (value ));
    }

    constructor() {
      //  localStorage.setItem("activity",JSON.stringify(activityMock))
    }
}
export default new ActivityRepository()