<script setup>
import { ref } from 'vue';
import { checkElegibility, getDiscount } from '@/helpers/functions';

const props = defineProps(['clientData', 'supplyPointData']);
const discount = ref(null);

const elegibility = checkElegibility(props.clientData, props.supplyPointData);
console.log('elegibility', elegibility)

if (elegibility) {
    discount.value = getDiscount(props.supplyPointData)
    console.log(discount.value)
} else {
    console.log('No eres apto para el producto, por tanto tampoco puedes optar a ningún descuento')
}
</script>

<template>
    <div class="product-info">
        <div class="elegibility" v-if="elegibility">
            <div class="first">
                <img class="icon-smile" src="../assets/img/smile.svg" />
                <span>Enhorabuena, puedes optar a las placas solares!</span>
            </div>
            <div class="discount-text" v-if="discount !== 'no-discount'">
                Y además...
                Tienes un <span v-if="discount === 'special'">12%</span><span v-else>5%</span> de descuento!
            </div>
        </div>
        <div class="no-elegibility" v-else>
            <img class="icon-sad" src="../assets/img/sad.svg" />
            <span>Lo sentimos, no puedes optar a este producto</span>
        </div>
    </div>
</template>

<style scoped>
.product-info {
    margin-top: 20px;
    background-color: #fff;
    background: linear-gradient(160deg,#e5007e,#f06b18 47%, #ffc621);
    border-radius: 8px;
    padding: 32px;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
}

.first {
    display: flex;
    align-items: center;
    gap: 5px;
}

.icon-smile, .icon-sad {
    height: 60px;
}

.no-elegibility {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>