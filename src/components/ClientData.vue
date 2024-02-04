<script setup>
    import { useCupsStore } from '@/stores/cups';

    const store = useCupsStore();
</script>

<template>
    <div class="data-client-container">
        <h1>Hola {{ store.clientData.full_name }},</h1>
        <span class="address"><img class="address-icon" src="../assets/img/address_icon.svg" /> Estás en {{ store.clientData.address }}</span>
        <br />
        <h4>CUPS: {{ store.clientData.cups }}</h4>
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
