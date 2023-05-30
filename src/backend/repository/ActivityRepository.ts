import Activity from "../models/Activity";
import StorageRep from "./StorageRep";

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
}
export default new ActivityRepository()