import { defineStore } from "pinia"
import { ref } from "vue"
import api from "../api"

export const useAuthStore = defineStore("auth", () => {
    const user = ref({
        pk: null,
        username: "",
        email: ""
    })

    const login = async (credentials) => {
        await api.post("token/", credentials)
            .then((response) => {
                user.value = response.data
                console.log(response)
            })
            .catch((error) => {
                console.log(`API call error: ${error}`)
                return Promise.reject(error)
            })
    }

    const refreshToken = async () => {
        await api.post("token/refresh/")
            .then((response) => {
                console.log(`Refresh token: ${response}`)
            })
            .catch((error) => {
                console.log(`API call error: ${error}`)
                return Promise.reject(error)
            })
    }

    const logout = async () => {
        await api.post("logout/")
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(`API call error: ${error}`)
                return Promise.reject(error)
            })
    }

    const register = async (credentials) => {
        await api.post("register/", credentials)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(`API call error: ${error}`)
                return Promise.reject(error)
            })
    }

    return {
        user,
        login,
        refreshToken,
        logout,
        register
    }
})
