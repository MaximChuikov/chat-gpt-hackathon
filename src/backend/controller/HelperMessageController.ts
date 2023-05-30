import MessageHelper from "../models/MessageHelper";
import HelperRepository from "../repository/HelperRepository";

class HelperMessageController {

    createMessage(message : MessageHelper) {
        return  HelperRepository.saveHelper(message)
    }
    getAllHelpers() : Array<MessageHelper>{
        return HelperRepository.getAllHelpers()
    }
    getAllActiveHelpers(){
        const allHelpers = this.getAllHelpers() as Array<MessageHelper>
        return allHelpers.map(e => !e.isComplete)
    }
}

export default new HelperMessageController()