// Utilities
import { defineStore } from 'pinia'
import { posts } from './data.json'
import { IPost } from './types'

interface IPostsStoreState {
  data:null|IPost[]
}

export const usePostsStore = defineStore('posts', {
  state: ():IPostsStoreState => ({
    data: null,
  }),
  actions: {
    initialize () {
      const localStorageData = localStorage.getItem('data')
      this.setData(localStorageData || posts)
    },
    setData (newData: any) {
      this.data = newData
    },
  },
})
