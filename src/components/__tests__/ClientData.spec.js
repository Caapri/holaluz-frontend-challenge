import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import ClientData from '../ClientData.vue'

function mountClientData () {
    const wrapper = mount(ClientData, { props: { data: Object } })
    return wrapper
}

describe('ClientData', () => {
  it('Mounts properly', () => {
    // const wrapper = mount(LandingPage, { props: { msg: 'Hello Vitest' } })
    // expect(wrapper.text()).toContain('Hello Vitest')
    expect(mountClientData()).toBeTruthy()
    // Check if submit button is mounted
    // expect(mountClientData().text()).toContain('Consultar')
  })
})
