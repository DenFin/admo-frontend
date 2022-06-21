import { mount } from '@vue/test-utils'
import RegisterPage from "~/pages/auth/register";

describe('RegisterPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(RegisterPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
