<template>
    <div>
        <form @submit.prevent="submitForm">
            <button type="submit">Confirm email</button>
        </form>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import api from "../../api"

const route = useRoute()
const router = useRouter()

const submitForm = async () => {
    await api.post(`account-confirm-email/${route.params.key}`, {
        key: route.params.key
    })
        .then((response) => {
            console.log(response)
            router.push("/login")
        })
        .catch((error) => {
            console.log(`API call error: ${error}`)
            return Promise.reject(error)
        })
}

</script>
