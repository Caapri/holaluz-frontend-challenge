import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { useCupsStore } from '@/stores/cups'

import ClientData from '../ClientData.vue'

function mountClientData () {
    const wrapper = mount(ClientData)
    return wrapper
}

describe('ClientData', () => {
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
  })

  it('Mounts properly', () => {
    expect(mountClientData()).toBeTruthy()
    // expect(wrapper.exists()).toBe(true);
  })
})
