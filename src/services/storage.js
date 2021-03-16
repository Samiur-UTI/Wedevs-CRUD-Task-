export function storageBook() {
    return (
        [
            {author: 'Samiur', title:'First Post', body:'Lorem Ipsum....', id:1, category:['News','Philosophy']},
            {author: 'Rahaman', title:'Second Post', body:'Lorem Ipsum....', id:2, category:['Politics']},
            {author: 'Khan', title:'Third Post', body:'Lorem Ipsum....', id:3, category:['Science','Philosophy']}
    
        ]
    )
}
export function storageCategory(books){
    let arrcat = [];
    books.forEach(element => {
        arrcat.push(element.category);
        })
    let allCat = new Set(arrcat.flat(1));
    return [...allCat]
}