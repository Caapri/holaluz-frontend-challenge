import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { useCupsStore } from '@/stores/cups'

import ProductElegibility from '../ProductElegibility.vue'
// import { checkElegibility, getDiscount } from '@/helpers/functions'

function mountProductElegibility () {
  const wrapper = mount(ProductElegibility)
  return wrapper
}

describe('ProductElegibility', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const store = useCupsStore();
    store.setClientData({
      "full_name": "Glenda Gilbert",
      "address": "Potato street, 9",
      "cups": "234567",
      "role": "customer-basic",
      "building_type": "house"
    });
    
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
    expect(mountProductElegibility()).toBeTruthy()
  })

  it.skip('Show if client can be part of the rooftop revolution', () => {
    const mainMessage = mountProductElegibility().find('.first')
    expect(mainMessage.text()).toContain('Enhorabuena, puedes optar a las placas solares!')
  })

  it.skip('Show discount if client have it', () => {
    const mainMessage = mountProductElegibility().find('.discount-text')
    expect(mainMessage.text()).toContain('Y además... Tienes un 12% de descuento!')
  })

  it.skip('Renders with elegibility and special discount', async () => {
  })
})
