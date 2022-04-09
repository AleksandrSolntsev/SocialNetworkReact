import * as axios from "axios"

const itance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY" : "d9eea707-3f90-4d7c-91bc-e65897e18db0"},
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
}
); 

export const usersAPI = {
    getUsers(currentPage, pageSize) { //Принимает значения от того кто вызывает ф-ю(а там она в пропсах)
    return itance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data) //верни из запроса response.data
    }
}

export const getUsers2 = (currentPage, pageSize) => { //Принимает значения от того кто вызывает ф-ю(а там она в пропсах)
    return itance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data) //верни из запроса response.data
}