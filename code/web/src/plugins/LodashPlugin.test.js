import { LodashPlugin } from './LodashPlugin'

test('lodash plugin can be correctly installed', () => {
  const FakeVue = () => {}

  LodashPlugin.install(FakeVue)
  expect(typeof FakeVue.prototype.$_.map).toBe('function')
})
