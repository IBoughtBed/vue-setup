import axios from "axios"
import { useAuthStore } from "../stores/auth"
import { useRouter } from "vue-router"

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
    timeout: 30 * 1000,
    withCredentials: true,
})

api.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        if (error.response.status && error.response.status === 401) {
            const url = error.response.config.url
            const endpoints = ["/logout", "/token/refresh/"]

            if (!endpoints.includes(url)) {
                const authStore = useAuthStore()
                const router = useRouter()

                await authStore.refreshToken()
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        router.push("/login")
                        console.log(`API call error: ${error}`)
                        return Promise.reject(error)
                    })
            }
        }

        console.log(`API call error: ${error}`)
        return Promise.reject(error)
    }
)

export default api
