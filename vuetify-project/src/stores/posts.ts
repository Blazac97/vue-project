// Utilities
import { defineStore } from 'pinia'
import { posts } from './data.json'
import { IPost } from './types'

interface IPostsStoreState {
  data:null|IPost[]
  showModal:boolean
  filteredItems:null|IPost[]
   searchText:null|string
}

export const usePostsStore = defineStore('posts', {
  state: ():IPostsStoreState => ({
    data: null,
    showModal: false,
    filteredItems: null,
    searchText: null,
  }),
  actions: {
    initialize () {
      const localStorageData = localStorage.getItem('data')
      this.setData(localStorageData || posts)
    },
    setData (newData: any) {
      this.data = newData
    },

    updatePost (id: string, name: string) {
      this.data = this.data!.map(post => {
        if (post.id === id) {
          post.name = name
        }
        return post
      })
    },
    deletePost (id:string) {
      this.data = this.data!.filter(el => el.id !== id)
    },

  },
  getters: {
    filtredData  () {
      if (!this.searchText) {
        this.filteredItems = this.data
      } else {
        this.filteredItems = this.data!.filter(item => item.name.includes(this.searchText!))
        console.log(this.filteredItems)
      }
    },
  },
})
