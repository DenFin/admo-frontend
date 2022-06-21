import { shallowMount } from "@vue/test-utils";
import IndexPage from "~/pages/index"


describe('IndePage', () => {

  test('random should return 2', () => {
    const wrapper = shallowMount(IndexPage)
    wrapper.setData({
      number: 2
    })
    expect(wrapper.vm.random).toEqual(2)
  })
})
