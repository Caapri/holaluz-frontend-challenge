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

  // it('Click submit button', async () => {
  //   const form = mountLandingPage().find('form')
  //   const spyOnForm = vi.spyOn(form, 'trigger')
  //   await form.trigger('click')

  //   expect(spyOnForm).toHaveBeenCalledOnce()
  // })

  it('Renders the input value', async () => {
    const input = mountLandingPage().find('input')
    expect(input.text()).toContain('')
    await input.setValue('123456')
    expect(input.element.value).toEqual('123456')
  })

  it.skip('Show error text if cups value is incorrect', async () => {
    const input = mountLandingPage().find('input')
    const form = mountLandingPage().find('form')
    input.element.value = '262626'
    // input.setValue('262626')
    // await mountLandingPage().find('form').trigger('submit')
    input.trigger('input')

    // await form.trigger('click')

    // await mountLandingPage().setData({cups: '262626'})
    // await mountLandingPage().find('button').trigger('click')
    // await mountLandingPage().vm.$nextTick();
    const error = mountLandingPage().find('#text-error')
    console.log('wrapper html:', mountLandingPage().html())
    console.log('error', error)
    expect(error.exists()).toBe(true);
    
    expect(error.text()).toContain('Client data with CUPS 262626 doesn\'t exist')
  })
})
