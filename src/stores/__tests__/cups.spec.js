import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useCupsStore } from "../cups";

describe('The cups store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('Client data', () => {
        let clientData = {
            "full_name": "Glenda Gilbert",
            "address": "Potato street, 9",
            "cups": "234567",
            "role": "customer-basic",
            "building_type": "house"
        }
        const store = useCupsStore()

        store.setClientData(clientData);
        expect(store.clientData).toStrictEqual(clientData);
    })

    test('Supply point data', () => {
        let supplyPointData = {
            "cups": "234567",
            "tariff": "Two prices",
            "invoiced_amount": "45.00",
            "power": {
              "p1": "5000",
              "p2": "4800"
            },
            "neighbors": ["123456", "345678"]
        }
        const store = useCupsStore()

        store.setSupplyPointData(supplyPointData);
        expect(store.supplyPointData).toStrictEqual(supplyPointData);
    })
})