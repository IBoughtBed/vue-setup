<template>
    <div></div>
</template>

<script>
import { useRoute, useRouter } from "vue-router"
import { onMounted } from "vue"
import api from "../../api"

const route = useRoute()
const router = useRouter()

onMounted(async () => {
    await api.post(`account-confirm-email/${route.params.key}`)
        .then((response) => {
            console.log(response)
            router.push("/login")
        })
        .catch((error) => {
            console.log(`API call error: ${error}`)
            return Promise.reject(error)
        })
})

</script>
