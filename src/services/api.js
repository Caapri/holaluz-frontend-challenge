import clients from '@/data/clients.json';
import supplyPoints from '@/data/supply-points.json';

const apiCalls = {
    getClientData: (cups) => {
        console.log(`Cups inside getClientData: ${cups}`);
        console.log(clients);
        const response = clients.find(client => client.cups === cups);

        if (response) {
            return response;
        } else {
            throw new Error(`Client data with CUPS ${cups} doesn't exist`);
        }
    },
    getSupplyPointData: (cups) => {
        console.log(`Cups inside getSupplyPointData: ${cups}`);
        console.log(supplyPoints);
        const response = supplyPoints.find(supplyPoint => supplyPoint.cups === cups);

        if (response) {
            return response;
        } else {
            throw new Error(`Supply point data from client with cups ${cups} doesn't exist`);
        }
    }
}

export default apiCalls;