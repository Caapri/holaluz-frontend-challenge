import apiCalls from "@/services/api";

const functions = {
    checkElegibility: (clientData, supplyPointData) => {
        return clientData.building_type === 'house' && supplyPointData.neighbors.length >= 1;
    },
    getDiscount: (supplyPointData) => {
        const basicDiscount = this.calculateBasicDiscount(supplyPointData);
        const specialDiscount = this.calculateSpecialDiscount(supplyPointData);

        console.log('basicDiscount', basicDiscount)
        console.log('specialDiscount', specialDiscount)

        if (basicDiscount) {
            return '5% de descuento';
        } else if (specialDiscount > 100) {
            return '12% de descuento';
        } else {
            return 'Sin descuento';
        }
    },
    // 5% discount. Conditions: its neighbors should have `p1` and `p2` powers lower than the current client's supply point.
    calculateBasicDiscount: (supplyPointData) => {
        let result = false;

        console.log('supplyPointData en calculateBasicDiscount', supplyPointData)
        if (supplyPointData.neighbors.length > 0) {
            supplyPointData.neighbors.forEach(neighborCUPS => {
                const supplyPointNeighborData = apiCalls.getSupplyPointData(neighborCUPS);
                console.log('supplyPointNeighborData.power.p1', supplyPointNeighborData.power.p1)
                console.log('supplyPointNeighborData.power.p2', supplyPointNeighborData.power.p2)
                console.log('supplyPointNeighborData', supplyPointNeighborData);
                if (supplyPointData.power.p1 > supplyPointNeighborData.power.p1 && supplyPointData.power.p2 > supplyPointNeighborData.power.p2) {
                    result = true;
                } else {
                    result = false;
                }
            });
        }

        return result;
    },
    // 12% discount. Conditions: the addition of the `invoiced_amount` of its neighbors should be more than 100 euros.
    calculateSpecialDiscount: (supplyPointData) => {
        console.log('supplyPointData en calculateSpecialDiscount', supplyPointData)
        let total = 0;

        // return supplyPointData.neighbors.some((sum, neighborCUPS) => {
        //     const supplyPointNeighborData = apiCalls.getSupplyPointData(neighborCUPS);
        //     console.log(sum + parseFloat(supplyPointNeighborData.invoiced_amount));
        //     return sum + parseFloat(supplyPointNeighborData.invoiced_amount);
        // }, 0);
        // TODO: Hacerlo con el método reduce
        if (supplyPointData.neighbors.length > 0) {
            supplyPointData.neighbors.forEach(neighborCUPS => {
                const supplyPointNeighborData = apiCalls.getSupplyPointData(neighborCUPS);
                total += parseFloat(supplyPointNeighborData.invoiced_amount);
            });
        }

        return total;
    }
}

// export default { checkElegibility, getDiscount, calculateBasicDiscount, calculateSpecialDiscount };
export default functions;