import { shallowMount } from '@vue/test-utils'
import IndexPage from '~/pages/index'

const authMock = {
  loggedIn: true,
}

describe('IndexPage', () => {
  test('random should return 2', () => {
    const wrapper = shallowMount(IndexPage, {
      mocks: {
        $auth: authMock,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
