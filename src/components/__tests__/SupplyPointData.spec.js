import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import SupplyPointData from '../SupplyPointData.vue'

function mountSupplyPointData () {
    const wrapper = mount(SupplyPointData, { props: { data: Object } })
    return wrapper
}

describe('SupplyPointData', () => {
  it('Mounts properly', () => {
    // const wrapper = mount(LandingPage, { props: { msg: 'Hello Vitest' } })
    // expect(wrapper.text()).toContain('Hello Vitest')
    expect(mountSupplyPointData()).toBeTruthy()
    // Check if submit button is mounted
    // expect(mountClientData().text()).toContain('Consultar')
  })
})
