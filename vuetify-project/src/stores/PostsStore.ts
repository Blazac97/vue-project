// Utilities
import { defineStore } from 'pinia'
import { posts } from './data.json'
import { IPost } from './types'

interface IPostsStoreState {
  data:null|IPost[]
  showModal:boolean
  filteredPosts:null|IPost[]
  searchText:null|string
}

export const usePostsStore = defineStore('posts', {
  state: ():IPostsStoreState => ({
    data: null,
    showModal: false,
    searchText: null,
    filteredPosts: null,
  }),
  actions: {
    initialize () {
      const localStorageData = localStorage.getItem('data')
      this.setData(localStorageData || posts)
    },
    setData (newData: any) {
      this.data = newData
    },
    createPost ({ name }:any) {
      this.data?.unshift({ name, id: Date.now().toString() })
    },

    updatePost ({ name, id }:any) {
      this.data = this.data!.map(post => {
        if (post.id === id) {
          post.name = name
        }
        return post
      })
    },
    deletePost (id: string) {
      this.data = this.data!.filter(post => post.id !== id)
    },
  },

  getters: {
    filteredData: state => {
      if (!state.searchText) {
        return state.data
      } else {
        return state.data!.filter(item => item.name.includes(state.searchText!))
      }
    },
  },

})
