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
    <AppHeader />

    <div id="search-box" v-if="!loaded">
        <form @submit.prevent="submitSearch">
            <input type="text" v-model="cups"
                placeholder="Introduce el número CUPS"
                maxlength="6"
                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                autofocus
            />
            <button type="submit" :disabled="!cups">Consultar</button>
        </form>
        <div id="text-error" v-if="error && cups != ''">
            {{ error }}
        </div>
    </div>

    <div id="data-box" v-if="clientData && supplyPointData">
        <button @click="cups = undefined; resetData()">Introducir otro CUPS</button>

        <div class="client-info">
            <ClientData :data="clientData" />
            <SupplyPointData :data="supplyPointData" />
        </div>
        <ProductElegibility :clientData="clientData" :supplyPointData="supplyPointData" />
    </div>
</template>

<style scoped>
#search-box {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    box-shadow: 0 9px 18px 0 #c8c0ab;
    background: #fff;
    width: 50%;
    padding: 32px;
    margin: 32px;
    border-radius: 8px;
    /* radial-gradient: #e5007e,#f06b18 32%,#ffc621 */
    /* background: linear-gradient(24deg, rgba(229,0,126,1) 0%, rgba(240,107,24,1) 35%, rgba(255,198,33,1) 100%); */
}

#text-error {
    font-size: 0.75rem;
    margin-top: 5px;
    text-align: left;
    color: rgb(209, 41, 41);
}

form {
    /* box-shadow: 0 9px 18px 0 #c8c0ab;
    background: #F9F8F3;
    width: 50%;
    padding: 32px;
    margin: 32px;
    border-radius: 8px; */
    display: flex;
    align-items: center;
    gap: 10px;
}

input {
    height: 2.5rem;
    border: 1px #d4d7db solid;
    padding: 0 2rem 0 0.5rem;
    border-radius: 4px;
    flex: 1;
}

input:focus {
    border: 1px solid #e5007e;
    outline: 2px solid #f8b0cb;
}

input:hover {
    border: 1px solid #e5007e;
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