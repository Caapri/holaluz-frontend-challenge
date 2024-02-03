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
            <h3 class="tariff">Tarifa {{ props.data.tariff }}</h3>
            <br />
            <div class="power">
                <span class="title">Potencia contratada</span>
                <span class="p1">Período Punta (P1): {{ parseInt(props.data.power.p1) / 1000 }} Kwh</span>
                <span class="p2">Período Llano (P2): {{ parseInt(props.data.power.p2) / 1000 }} Kwh</span>
            </div>
        </div>
        <div class="amount">
            <!-- TODO: Hacer que el font-size sea dinámico dependiendo del tamaño de la pantalla -->
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

.title {
    font-size: 18px;
    font-weight: bold;
}

.p1 {
    
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
