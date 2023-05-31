class StorageRep {
    getStorage<T>(name : String) : Map<string,T> {
        let test = JSON.parse(localStorage.getItem(name.toString()) || "{}") as Map<string,T>
        if(!test)
        {
            let map =  new Map<string,T>()
            localStorage.setItem(name.toString(),JSON.stringify(map) )
            return map
        }
        return test
    }

    saveStorage<T>(name : string, storage : T) {

        localStorage.setItem(name.toString(),JSON.stringify(storage))
        return JSON.parse(localStorage.getItem(name.toString()) || "{}") as Map<string,T>
    }
}
export default new StorageRep()