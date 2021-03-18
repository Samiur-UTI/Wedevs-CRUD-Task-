export function findByIdAndRead(storage,id){
    let obj;
    storage.map(element => {
        if(element.id == id){
            obj = element
        }
    })
    return obj
}
export function findByIdAndUpdate(storage,updatedPost){
    let index;
    for(let i=0; i<storage.length ; i++){
        if(storage[i].id == updatedPost.id){
            index = [i]
        }
    }
    storage.splice(index,1,updatedPost);
    return storage;
}