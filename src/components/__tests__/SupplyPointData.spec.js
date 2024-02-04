import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { useCupsStore } from '@/stores/cups'

import SupplyPointData from '../SupplyPointData.vue'

function mountSupplyPointData () {
  const wrapper = mount(SupplyPointData)
  return wrapper
}

describe('SupplyPointData', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const store = useCupsStore();
    store.setSupplyPointData({
      "cups": "234567",
      "tariff": "Two prices",
      "invoiced_amount": "45.00",
      "power": {
        "p1": "5000",
        "p2": "4800"
      },
      "neighbors": ["123456", "345678"]
    });
  })

  it('Mounts properly', () => {
    expect(mountSupplyPointData()).toBeTruthy()
  })
})

