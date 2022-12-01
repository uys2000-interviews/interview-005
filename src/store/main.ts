import { defineStore } from 'pinia'
import { example, examples, result } from './mainVariables'

export const useMainStore = defineStore('main', {
  state: () => ({
    example: example,
    examples: examples,
    result: result,
  }),
  actions: {
  },
  getters: {
    getMain: (state) => state.example,
  },
})