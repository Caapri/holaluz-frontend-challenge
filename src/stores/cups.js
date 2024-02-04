import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCupsStore = defineStore('cups', () => {
    const clientData = ref(null);
    const supplyPointData = ref(null);

    function setClientData(data) {
        this.clientData = data;
    }

    function setSupplyPointData(data) {
        this.supplyPointData = data;
    }

    return { clientData, supplyPointData, setClientData, setSupplyPointData }
})