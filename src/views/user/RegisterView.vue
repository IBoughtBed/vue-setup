<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <input v-model="credentials.username" type="text" placeholder="Username">
            </div>
            <div>
                <input v-model="credentials.email" type="email" placeholder="Email">
            </div>
            <div>
                <input v-model="credentials.password1" type="password" placeholder="Password">
            </div>
            <div>
                <input v-model="credentials.password2" type="password" placeholder="Confirm password">
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useAuthStore } from "../../stores/auth"

const authStore = useAuthStore()

const credentials = ref({
    username: "",
    email: "",
    password1: "",
    password2: ""
})

const submitForm = async () => {
    await authStore.register(credentials.value)
}

</script>
