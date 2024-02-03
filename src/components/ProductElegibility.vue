<script setup>
import { checkElegibility, getDiscount } from '@/helpers/functions';

const props = defineProps(['clientData', 'supplyPointData']);

const elegibility = checkElegibility(props.clientData, props.supplyPointData);
console.log('elegibility', elegibility)

// console.log(functions.calculateBasicDiscount(props.supplyPointData))
// const specialDiscount = functions.calculateSpecialDiscount(props.supplyPointData);
// console.log('specialDiscount', specialDiscount)

if (elegibility) {
    const discount = getDiscount(props.supplyPointData)
    console.log('discount', discount)
} else {
    console.log('No eres apto para el producto, por tanto tampoco puedes optar a ningún descuento')
}
</script>

<template>
    <h1>Hola mundo!</h1>
    {{  props.clientData }}
    {{  props.supplyPointData }}
</template>

<style scoped>

</style>