
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {

    return items.map(u => { 
    if(u[objPropName] === itemId){
        console.log ("Befor")
        return {...u, ...newObjProps} 
    } 
    
    return u; 

})

}