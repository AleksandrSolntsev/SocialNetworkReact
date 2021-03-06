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
    },
    follow(userId) {
        return itance.post(`follow/${userId}`)
                
    },
    unfollow(userId) {
        return itance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
    }

}


export const profileAPI = {
    getProfile(userId){
        return itance.get(`profile/` + userId);
    },
    getStatus(userId){
        return itance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return itance.put(`profile/status/`, {status:status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)

        return itance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return itance.put(`profile`, profile)
    }

}

export const authAPI = {
    me () {
        return itance.get(`auth/me`);
                },
    login (email, password, rememberMe = false, captcha=null) {
        return itance.post(`auth/login`, {email, password, rememberMe, captcha});
            },
    logout () {
        return itance.delete(`auth/login`);
             }
}

export const securityAPI = {
    getCaptchaURL () {
        return itance.get(`security/get-captcha-url`);
                },
}