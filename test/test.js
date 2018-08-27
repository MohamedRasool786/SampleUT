"use strict";
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import homeHeaderPage from '../src/docs/homeHeaderPage.vue'


describe('homeHeaderPage.vue', () => {
  it('homeHeaderPage', () => {
    const wrapper = mount(homeHeaderPage, {
      propsData: {
        tag: 'card-cascade',
        cascade: true
      }
    })
    expect(wrapper.props().tag).toBe('card-cascade'),
    expect(wrapper.props().cascade).toBe(true)
  })
})
