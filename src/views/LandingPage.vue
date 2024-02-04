<script setup>
    import ClientData from '@/components/ClientData.vue';
    import SupplyPointData from '@/components/SupplyPointData.vue';
    import ProductElegibility from '@/components/ProductElegibility.vue';
    import apiCalls from '../services/api';
    import { ref } from 'vue';
    import { useCupsStore } from '@/stores/cups.js';

    // Refs to update in real time the values of each variable when them changes
    const cups = defineModel({ required: true });
    const error = ref(null);
    const loaded = ref(false);

    const store = useCupsStore();

    const resetData = () => {
        store.setClientData(null);
        store.setSupplyPointData(null);
        error.value = null;
        loaded.value = false;
    }

    const getDataByCups = () => {
        try {
            const clientData = apiCalls.getClientData(cups.value);
            const supplyPointData = apiCalls.getSupplyPointData(cups.value);

            store.setClientData(clientData);
            store.setSupplyPointData(supplyPointData);

            loaded.value = true;
        } catch (e) {
            error.value = e.message;
            loaded.value = false;
        }
    }

    const submitSearch = () => {
        resetData();
        getDataByCups();
    }
</script>

<template>
    <section id="product-section">
        <div class="product-section--text">
            <p>¡Súmate a la revolución de los tejados con nuestras placas solares!</p>
            <p>Cámbiate hoy mismo y empieza a ahorrar</p>
        </div>
    </section>

    <div id="search-container" v-if="!loaded">
        <p>Introduce a continuación tu CUPS y comprueba <b>al instante</b> si puedes sumarte a la revolución de los tejados</p>
        <div class="search-box">
            <form @submit.prevent="submitSearch">
                <input type="text" v-model="cups"
                    placeholder="Introduce el número CUPS"
                    maxlength="6"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    autofocus
                />
                <button type="submit" :disabled="!cups">Consultar</button>
            </form>
        </div>
        <div id="text-error" v-if="error">
            {{ error }}
        </div>
    </div>

    <div id="data-box" v-if="store.clientData && store.supplyPointData">
        <button @click="cups = undefined; resetData()">Introducir otro CUPS</button>

        <div class="client-info">
            <ClientData />
            <SupplyPointData />
        </div>
        <ProductElegibility />
    </div>
</template>

<style scoped>
#product-section {
    background-image: url('../assets/img/techos-solares.jpg');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    height: 70%;
}

.product-section--text {
    width: calc(80% + 20vw);
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 40px;
    color: #fff;
    font-weight: bold;
    
}

.product-section--text > p:first-child {
    margin-bottom: 5rem;
    font-size: calc(30px + 0.390625vw);
}

.product-section--text > p:last-child {
    font-size: calc(20px + 0.390625vw);
}

.content {
    padding: 32px;
  }

#search-container {
    transform: translate(0%,-68px);
    box-shadow: 0 9px 18px 0 #c8c0ab;
    background: #fff;
    padding: 32px;
    border-radius: 8px;
    width: 50%;
    margin: 0 auto;
}

@media (min-width: 710px) {
    .product-section--text {
        width: 50%;
    }
}

@media (max-width: 710px) {
    #search-container {
        margin: 0rem 1rem 1rem 1rem;
        width: auto;
    }

    form {
        flex-direction: column;
        align-items: flex-start;
    }

    #data-box > .client-info {
        flex-direction: column;
    }
}

#search-container > p {
    margin-bottom: 15px;
    width: 90%;
}

#text-error {
    font-size: 0.75rem;
    margin-top: 5px;
    text-align: left;
    color: rgb(209, 41, 41);
}

form {
    display: flex;
    gap: 10px;
}

input {
    height: 2.5rem;
    border: 1px #d4d7db solid;
    padding: 0 2rem 0 0.5rem;
    border-radius: 4px;
    width: 100%;
}

input:focus {
    border: 1px solid #e5007e;
    outline: 2px solid #f8b0cb;
}

input:hover {
    border: 1px solid #e5007e;
}

#data-box {
    transform: translate(0%,-27vh);
    box-shadow: 0 9px 18px 0 #c8c0ab;
    background: #fff;
    padding: 32px;
    margin: 0rem 1rem 1rem 1rem;
    border-radius: 8px;
}

#data-box > .client-info {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin-top: 20px;
}
</style>