<script setup>
import functions from '@/helpers/functions';

const props = defineProps(['clientData', 'supplyPointData']);

const elegibility = functions.checkElegibility(props.clientData, props.supplyPointData);
console.log('elegibility', elegibility)

// console.log(functions.calculateBasicDiscount(props.supplyPointData))
// const specialDiscount = functions.calculateSpecialDiscount(props.supplyPointData);
// console.log('specialDiscount', specialDiscount)

const discount = functions.getDiscount(props.supplyPointData)
console.log('discount', discount)
</script>

<template>
    <h1>Hola mundo!</h1>
    {{  props.clientData }}
    {{  props.supplyPointData }}
</template>

<style scoped>

</style>