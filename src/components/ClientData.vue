<script setup>
    const props = defineProps(['data']);
</script>

<template>
    <div class="data-client-container">
        <h1>Hola {{ props.data.full_name }},</h1>
        <span class="address"><img class="address-icon" src="../assets/img/address_icon.svg" /> Estás en {{ props.data.address }}</span>
        <br />
        <h4>CUPS: {{ props.data.cups }}</h4>
    </div>
</template>

<style scoped>
.address {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: grey;
}

.address-icon {
    height: 4vh;
    color: grey;
}
</style>
