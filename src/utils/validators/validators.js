export const requiredField = (value) =>{
    if (value) return undefined;
        return "Fields can not to be Null"
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Max Length is ${maxLength} symbols`;
        return undefined
}
