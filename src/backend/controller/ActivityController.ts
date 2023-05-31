import Activity from "../models/Activity";
import ActivityRepository from "../repository/ActivityRepository";
import User from "../models/User";
import MemeRepository from "../repository/MemeRepository";
import {activityMock, memeMock} from "../data";

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

        if(activity.users == null)
            activity.users = new Map<string,User>()
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

    constructor() {
        if(ActivityRepository.getAllActivity() !== null) {

            for (let i = 0; i < activityMock.length; i++) {
                let t = this.createActivity(activityMock[i])
            }
        }
    }

}

export default new ActivityController()