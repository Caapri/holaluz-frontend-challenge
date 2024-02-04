import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import LandingPage from '../LandingPage.vue'

function mountLandingPage () {
    const wrapper = mount(LandingPage, { props: {} })
    return wrapper
}

describe('LandingPage', () => {
  it('Mounts properly', () => {
    // const wrapper = mount(LandingPage, { props: { msg: 'Hello Vitest' } })
    // expect(wrapper.text()).toContain('Hello Vitest')
    expect(mountLandingPage()).toBeTruthy()
    // Check if submit button is mounted
    expect(mountLandingPage().text()).toContain('Consultar')
  })

  it('Click submit button', async () => {
    const form = mountLandingPage().find('form')
    const spyOnForm = vi.spyOn(form, 'trigger')
    await form.trigger('click')

    expect(spyOnForm).toHaveBeenCalledOnce()
  })

  it('Renders the input value', async () => {
    const input = mountLandingPage().find('input')
    expect(input.text()).toContain('')
    await input.setValue('123456')
    expect(input.element.value).toEqual('123456')
  })
})
