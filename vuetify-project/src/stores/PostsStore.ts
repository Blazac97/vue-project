// Utilities
import { defineStore } from 'pinia'
import { posts } from './data.json'
import { IPost } from './types'

interface IPostsStoreState {
  data:null|IPost[]
  showModal:boolean
  filteredPosts:null|IPost[]
  searchText:null|string
  selectedPost: string|null
}

export const usePostsStore = defineStore('posts', {
  state: ():IPostsStoreState => ({
    data: null,
    showModal: false,
    searchText: null,
    filteredPosts: null,
    selectedPost: null,

  }),
  actions: {
    initialize () {
      let localStorageData:any = localStorage.getItem('data')
      if (localStorageData) {
        localStorageData = JSON.parse(localStorageData)
      }
      this.setData(localStorageData || posts)
      this.$subscribe((_, state) => {
        localStorage.setItem('data', JSON.stringify(state.data))
      })
    },
    setData (newData: IPostsStoreState['data']) {
      this.data = newData
    },
    createPost ({ name }:Omit<IPost, 'id'>) {
      this.data?.unshift({ name, id: Date.now().toString() })
    },

    updatePost ({ name, id }:IPost) {
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
    selectPost (id:string) {
      this.selectedPost = id
    },
  },

  getters: {
    filteredData: state => {
      if (!state.searchText) {
        return state.data
      } else {
        return state.data!.filter(item => item.name.toUpperCase().includes(state.searchText!.toUpperCase()))
      }
    },
  },

})
