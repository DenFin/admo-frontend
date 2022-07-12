import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

describe('store/ui/overlay', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store
  it.todo('should be a store')
  // beforeAll(async () => {
  //   // note the store will mutate across tests
  //   const storePath = `${process.env.buildDir}/store.js`
  //   NuxtStore = await import(storePath)
  // })
  //
  // beforeEach(async () => {
  //   store = await NuxtStore.createStore()
  // })
  //
  //
  // describe('isActive', () => {
  //   let isActive
  //
  //   beforeEach(() => {
  //     isActive = store.state['ui/overlay.store']
  //   })
  //
  //   test('is array', () => {
  //     expect(_.isArray(isActive)).toBe(true)
  //   })
  //
  //
  // })
})
