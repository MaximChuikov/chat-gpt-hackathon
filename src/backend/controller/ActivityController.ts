import Activity from "../models/Activity";
import ActivityRepository from "../repository/ActivityRepository";
import User from "../models/User";

class ActivityController {

    createActivity(activity : Activity) {
        return  ActivityRepository.saveActivity(activity)
    }

    completeActivity(activityId : string) {
        let activity = ActivityRepository.getActivity(activityId)
        activity.isActive = false
        return ActivityRepository.saveActivity(activity)
    }

    addAndDeleteUserInActivity(activityId : string, userAdd : User){
        let activity = ActivityRepository.getActivity(activityId)
        // @ts-ignore
        if(activity.users[userAdd.id]){
            activity.users.delete(userAdd.id)
        }
        else{
            // @ts-ignore
            activity.users[userAdd.id]= userAdd
        }
        return ActivityRepository.saveActivity(activity)
    }

    switchActivity(activity : Activity, check : boolean){
        activity.isLike = check
        return ActivityRepository.saveActivity(activity)
    }

    getAllUncheckActivity(){
        return ActivityRepository.getAllActivity().filter(e => e.isLike === null)
    }

    getAllLikeActivity(){
        return ActivityRepository.getAllActivity().filter(e => e.isLike === true)
    }

    getAllUnlikeActivity(){
        return ActivityRepository.getAllActivity().filter(e => e.isLike === false)
    }

    getActivityById(activityId : string){
        return ActivityRepository.getActivity(activityId)
    }


}

export default new ActivityController()