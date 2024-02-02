<script setup>
    const cups = defineModel({ required: true });
    let cupsNumber = '';

    const submitSearch = () => {
        // cupsNumber = cups.value;
        console.log(cupsNumber)
        this.$emit('sendCupsNumber', cups.value);
    }
</script>

<template>
    <form @submit.prevent="submitSearch">
        CUPS:
        <input type="text" v-model.number="cups"
            placeholder="Introduce el número CUPS"
            maxlength="6"
            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        />
        <button type="submit">Mostrar datos</button>
    </form>
</template>

<style scoped>

</style>