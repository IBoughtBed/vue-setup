<template>
    <div>
        <form @submit.prevent="submitForm">
            <button type="submit">Log out</button>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth"

const authStore = useAuthStore()

const submitForm = async () => {
    await authStore.logout()
}

</script>
