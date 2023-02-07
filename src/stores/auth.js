import { defineStore } from "pinia"
import { ref, watch } from "vue"
import api from "../api"

export const useAuthStore = defineStore("auth", () => {
    const user = ref({
        pk: null,
        username: "",
        email: "",
        logged_in: false
    })

    if (localStorage.getItem("user")) {
        user.value = JSON.parse(localStorage.getItem("user"))
    }

    watch(
        user,
        (newValue) => {
            localStorage.setItem("user", JSON.stringify(newValue))
        },
        { deep: true }
    )

    const login = async (credentials) => {
        await api.post("token/", credentials)
            .then((response) => {
                user.value = response.data.user
                user.value.logged_in = true
                console.log(response)
            })
    }

    const refreshToken = async () => {
        await api.post("token/refresh/")
            .then((response) => {
                console.log(`Refresh token: ${response}`)
            })
    }

    const logout = async () => {
        await api.post("logout/")
            .then((response) => {
                console.log(response)
            })
    }

    const register = async (credentials) => {
        await api.post("register/", credentials)
            .then((response) => {
                console.log(response)
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
