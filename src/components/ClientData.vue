<script setup>
    const props = defineProps(['data']);
</script>

<template>
    <div class="data-client-container">
        <!-- <b>{{ props.data }}</b> -->

        <h1>Hola {{ props.data.full_name }},</h1>
        <span class="address"><img class="address-icon" src="../assets/address_icon.svg" /> Estás en {{ props.data.address }}</span>
        <br />
        <h4>CUPS: {{ props.data.cups }}</h4>
        <!-- <h4>Rol: <span v-if="props.data.role === 'customer'">Cliente</span><span v-else>Otro</span></h4>
        <h4>Tipo de edificación: <span v-if="props.data.building_type === 'house'">Casa</span><span v-else-if="props.data.building_type === 'apartment'">Apartamento</span></h4> -->
    </div>
</template>

<style scoped>
/* .data-client-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;
    width: 500px;
} */

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
