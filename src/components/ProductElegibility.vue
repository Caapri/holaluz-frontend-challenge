<script setup>
import { checkElegibility, getDiscount } from '@/helpers/functions';

const props = defineProps(['clientData', 'supplyPointData']);

const elegibility = checkElegibility(props.clientData, props.supplyPointData);
console.log('elegibility', elegibility)

if (elegibility) {
    const discount = getDiscount(props.supplyPointData)
    console.log(discount)
} else {
    console.log('No eres apto para el producto, por tanto tampoco puedes optar a ningún descuento')
}
</script>

<template>
    <div class="product-info">
        {{  props.clientData }}
        {{  props.supplyPointData }}
    </div>
</template>

<style scoped>
.product-info {
    margin-top: 20px;
}
</style>