import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import LandingPage from '../LandingPage.vue'

function mountLandingPage () {
    const wrapper = mount(LandingPage)
    return wrapper
}

describe.skip('LandingPage', () => {
  it('Mounts properly', () => {
    expect(mountLandingPage()).toBeTruthy()
  })

  it.skip('Renders the input value', async () => {
    const input = mountLandingPage().find('input')
    expect(input.text()).toContain('')
    await input.setValue('123456')
    expect(input.element.value).toEqual('123456')
  })
})