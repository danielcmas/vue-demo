//import { shallowMount } from '@vue/test-utils'
import RomanNumbers from '@/components/RomanNumbers.vue'

describe('RomanNumbers.vue', () => {
  it('Check data is initialized to zero', () => {
    const defaultData = RomanNumbers.data();

    expect(defaultData.plainNumber).toBe(0)
  })
})
