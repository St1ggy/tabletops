import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSomething = defineStore('something', {
  state: () => ({}),

  getters: {},

  actions: {},

  persist: true,
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSomething, import.meta.hot))
}
