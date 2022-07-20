import { mount } from '@vue/test-utils'
import AppTitle from '@/modules/shared/components/AppTitle'

describe('App Title', () => {
  const wrapper = mount(AppTitle, {
    propsData: {
      text: 'Notícias'
    }
  })

  it('is a Vue instance', () => {  
    expect(wrapper.vm).toBeTruthy()
  })

  it('title should be Notícias', () => {
    expect(wrapper.find(".app-title").text()).toBe('Notícias')
  })
})
