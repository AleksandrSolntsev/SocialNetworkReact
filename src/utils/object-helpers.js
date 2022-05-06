export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
items.users.map(u => { 
    if(u[objPropName] === itemId){
        return {...u, ...newObjProps} 
    } 
    return u; 

})

}