<script setup>
    const props = defineProps(['data']);
</script>

<template>
    <div class="data-supplypoint-container">
        <div class="supply-point-info">
            <h3 class="tariff">Tarifa {{ props.data.tariff }}</h3>
            <br />
            <div class="power">
                <span class="title">Potencia contratada:</span>
                <div class="values">
                    <span class="p1">P1: {{ parseInt(props.data.power.p1) / 1000 }} kW</span>
                    <span class="p2">P2: {{ parseInt(props.data.power.p2) / 1000 }} kW</span>
                </div>
            </div>
        </div>
        <div class="amount">
            <!-- TODO: Hacer que el font-size sea dinámico dependiendo del tamaño de la pantalla -->
            <h3 class="amount-title">Importe facturado <span class="invoiced-amount">{{ props.data.invoiced_amount }} €</span></h3>
        </div>
    </div>
</template>

<style scoped>
.data-supplypoint-container {
    flex: 1;
    display: flex;
    gap: 10px;
}

.supply-point-info {
    width: 75%;
    font-size: 20px;
}

.tariff {
    font-family: GilroySemibold;
    font-weight: bold;
    color: #e5007d;
}

.power {
    display: flex;
    flex-direction: column;
}

.values {
    display: flex;
    gap: 20%;
}

.p1, .p2 {
    font-weight: bold;
}

.amount {
    margin-left: auto;
}

.amount-title {
    font-weight: 600;
    display: flex;
    flex-direction: column;
}

.invoiced-amount {
    color: #e5007d;
    font-size: 3rem;
    font-weight: bold;
}
</style>
