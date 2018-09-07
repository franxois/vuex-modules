import {
  shallowMount
} from '@vue/test-utils'
import store from "@/store"
import Hello from '@/components/Hello.vue'

describe('Hello.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Add module'
    const wrapper = shallowMount(Hello, {
      propsData: {
        msg
      },
      store
    })
    expect(wrapper.text()).toContain(msg)
  })
})
