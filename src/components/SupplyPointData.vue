<script setup>
    const props = defineProps(['data']);

    console.log('props data supply: ', props.data)
</script>

<template>
    <div class="data-supplypoint-container">
        <!-- <b>{{ props.data }}</b> -->

        <!-- <h1>Información sobre tu punto de suministro</h1>
        <br /> -->
        <div class="supply-point-info">
            <span>Tarifa {{ props.data.tariff }}</span>
            <div class="power">
                Potencia contratada
                Período Punta (P1) {{ props.data.power.p1 }}
                Período Llano (P2) {{ props.data.power.p2 }}
            </div>
        </div>
        <div class="tariff">
            <h3 class="amount-title">Importe facturado <span class="invoiced-amount">{{ props.data.invoiced_amount }} €</span></h3>
        </div>
        <!-- <h4>Nº CUPS: {{ props.data.cups }}</h4>
        <h4>Tarifa: {{ props.data.tariff }}</h4>
        <h4>Importe facturado: {{ props.data.invoiced_amount }}€</h4>
        <h4>Potencia: </h4> -->
    </div>
</template>

<style scoped>
.data-supplypoint-container {
    flex: 1;
    display: flex;
}

.supply-point-info {
    width: 75%;
}

.tariff {
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
