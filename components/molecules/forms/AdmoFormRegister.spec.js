import { mount } from '@vue/test-utils'
import AdmoFormRegister from "~/components/molecules/forms/AdmoFormRegister";

describe('AdmoFormRegister', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AdmoFormRegister)
    expect(wrapper.vm).toBeTruthy()
  })
})
