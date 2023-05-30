import Activity from "../models/Activity";
import ActivityRepository from "../repository/ActivityRepository";
import User from "../models/User";

class ActivityController {

    createActivitу(activity : Activity) {
        return  ActivityRepository.saveActivity(activity)
    }

    compliteActivitу(activityId : string) {
        let activity = ActivityRepository.getActivity(activityId)
        activity.isActive = false
        return ActivityRepository.saveActivity(activity)
    }

    userAddDeleteInActivity(activityId : string, userAdd : User){
        let activity = ActivityRepository.getActivity(activityId)
        // @ts-ignore
        if(activity.users[userAdd.id]){
            activity.users.delete(userAdd.id)
        }
        else{
            // @ts-ignore
            activity.uisers[userAdd.id]= userAdd
        }

        return ActivityRepository.saveActivity(activity)
    }

}

export default new ActivityController()