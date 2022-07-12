import { mount } from '@vue/test-utils'
import AdmoFormLogin from '~/components/molecules/forms/AdmoFormLogin'

describe('AdmoFormLogin', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AdmoFormLogin)
    expect(wrapper.vm).toBeTruthy()
  })
})
