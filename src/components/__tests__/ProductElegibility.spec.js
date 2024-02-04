import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductElegibility from '../ProductElegibility.vue'
import { checkElegibility, getDiscount } from '@/helpers/functions'

vi.mock('@/helpers/functions', () => ({
  checkElegibility: vi.fn(),
  getDiscount: vi.fn(),
}));

function mountProductElegibility () {
  const wrapper = mount(ProductElegibility, {
    props: {
      clientData: {
        "full_name": "Steven Walters",
        "address": "Swede street, 7",
        "cups": "111222",
        "role": "customer",
        "building_type": "house"
      }, 
      supplyPointData: {
        "cups": "111222",
        "tariff": "Three prices",
        "invoiced_amount": "10.00",
        "power": {
          "p1": "4700",
          "p2": "4500"
        },
        "neighbors": ["456123"]
      }
    }
  })
  
  return wrapper
}

describe('ProductElegibility', () => {
  it.skip('Mounts properly', () => {
    expect(mountProductElegibility()).toBeTruthy()
  })

  it.skip('Show if client can be part of the rooftop revolution', () => {
    const mainMessage = mountProductElegibility().find('.first')
    expect(mainMessage.text()).toContain('Enhorabuena, puedes optar a las placas solares!')
    // expect(mainMessage.text()).toContain('Lo sentimos, no puedes optar a este producto')
  })

  it.skip('Show discount if client have it', () => {
    const mainMessage = mountProductElegibility().find('.discount-text')
    expect(mainMessage.text()).toContain('Y además... Tienes un 12% de descuento!')
  })

  it.skip('Renders with elegibility and special discount', async () => {
    // Mock props
    const clientData = {
      "full_name": "Steven Walters",
      "address": "Swede street, 7",
      "cups": "111222",
      "role": "customer",
      "building_type": "house"
    }

    const supplyPointData = {
      "cups": "111222",
      "tariff": "Three prices",
      "invoiced_amount": "10.00",
      "power": {
        "p1": "4700",
        "p2": "4500"
      },
      "neighbors": ["456123"]
    }

    checkElegibility.mockReturnValue(true);
    getDiscount.mockReturnValue('special')

    const wrapper = mount(ProductElegibility, {
      props: { clientData, supplyPointData }
    });

    await wrapper.vm.$nextTick();

    console.log('html', wrapper.html())

    expect(wrapper.find('.first span').text().toContain('Enhorabuena, puedes optar a las placas solares!'))
    expect(wrapper.find('.discount-text span').text().toContain('12%'))
  })
})
