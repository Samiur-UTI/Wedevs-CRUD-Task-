export function findByIdAndRead(storage,id){
    let obj;
    storage.map(element => {
        if(element.id == id){
            obj = element
        }
    })
    return obj
}