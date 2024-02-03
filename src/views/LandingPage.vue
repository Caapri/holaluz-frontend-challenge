<script setup>
    import AppHeader from '@/components/AppHeader.vue';
    import ClientData from '@/components/ClientData.vue';
    import SupplyPointData from '@/components/SupplyPointData.vue';
    import ProductElegibility from '@/components/ProductElegibility.vue';
    import apiCalls from '../services/api';
    import { ref } from 'vue';

    // Refs to update in real time the values of each variable when them changes
    const cups = defineModel({ required: true });
    const clientData = ref(null);
    const supplyPointData = ref(null);
    const error = ref(null);
    const loaded = ref(false);

    const resetData = () => {
        clientData.value = null;
        supplyPointData.value = null;
        error.value = null;
        loaded.value = false;
    }

    const getDataByCups = () => {
        console.log(cups.value);

        try {
            clientData.value = apiCalls.getClientData(cups.value);
            supplyPointData.value = apiCalls.getSupplyPointData(cups.value);
            loaded.value = true;
        } catch (e) {
            console.log('Error', e);
            error.value = e.message;
            loaded.value = false;
        }

        console.log('clientData', clientData);
        console.log('supplyPointData', supplyPointData);
    }

    const submitSearch = () => {
        resetData();
        getDataByCups();
    }

    // TODO: usar emojis de tristeza o de happy si puede aplicar al producto
    // TODO: Hacer cálculos de descuentos
</script>

<template>
    <!-- <CupsSearch v-model="cupsNumber" /> -->
    <!-- El número CUPS es {{ cupsNumber }} -->
    <!-- <CupsSearch /> -->
    <!-- <CupsSearch @sendCupsNumber="handleCupsNumber" /> -->

    <AppHeader />

    <!-- <div id="main-content"> -->
        <div id="search-box">
            <form @submit.prevent="submitSearch" v-if="!loaded">
                <h3>CUPS:</h3>
                <input type="text" v-model="cups"
                    placeholder="Introduce el número CUPS"
                    maxlength="6"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    autofocus
                />
                <button type="submit" :disabled="!cups">Mostrar datos</button>
            </form>
        </div>

        <div id="data-box" v-if="clientData && supplyPointData">
            <button @click="resetData">Introducir otro CUPS</button>

            <div class="client-info">
                <!-- <div class="data-client-container">
                    {{ clientData }}
                </div> -->
                <ClientData :data="clientData" />
                <SupplyPointData :data="supplyPointData" />
                <!-- <div class="data-supplypoint-container">
                    {{ supplyPointData }}
                </div> -->
            </div>
            <ProductElegibility :clientData="clientData" :supplyPointData="supplyPointData" />
        </div>
        <div v-else>
            {{ error }}
        </div>
        
    <!-- </div> -->
</template>

<style scoped>

#search-box {
    display: flex;
    justify-content: center;
}
* {
    /* display: flex;
    align-items: center;
    justify-content: center; */
}

form {
    box-shadow: 0 9px 18px 0 #c8c0ab;
    background: #F9F8F3;
    width: 50%;
    padding: 32px;
    margin: 32px;
    border-radius: 8px;
}

input {
    border: none;
}

#data-box {
    /* border: 1px black solid; */
    padding: 32px;
}

#data-box > .client-info {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin-top: 20px;
}
</style>