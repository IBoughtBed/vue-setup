<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <input v-model="credentials.username" type="text" placeholder="Username">
            </div>
            <div>
                <input v-model="credentials.password" type="password" placeholder="Password">
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth"
import { ref } from "vue"

const authStore = useAuthStore()

const credentials = ref({
    username: "",
    password: ""
})

const submitForm = async () => {
    await authStore.login(credentials.value)
}

</script>
