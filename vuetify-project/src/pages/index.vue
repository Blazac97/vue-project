<template>
  <v-card
    class="mx-auto"
    max-width="70vw"
  >
    <v-card-title>
      Posts
      <v-container>
        <v-row>
          <v-col
            cols="20"
            md="9"
          >
            <v-text-field
              v-model="postStore.searchText"
              hide-details
              label="Search"
              required
              rounded="lg"
            />
          </v-col>
          <v-col class="d-flex align-center justify-center">
            <PostModal @on-submit="postStore.createPost">
              <template #activator>
                <v-btn
                  color="green-accent-4"
                  prepend-icon="mdi-plus-box"
                  rounded="lg"
                  size="x-large"
                  variant="tonal"
                > Create </v-btn>
              </template>
            </PostModal>
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
    <v-divider />
    <v-virtual-scroll
      v-if="postStore.filteredData"
      height="40vw"
      item-height="10"
      :items="postStore.filteredData"
    >
      <template #default="{ item }">
        <Post :id="item.id" :is-selected="postStore.selectedPost === item.id" :name="item.name" @on-click="postStore.selectPost(item.id)" />
      </template>
    </v-virtual-scroll>
    <v-input
      v-model="postStore.searchText"
      placeholder="Search by name..."
    />
  </v-card>
</template>

<script lang="ts">
  import { usePostsStore } from '@/stores/posts'
  export default {
    setup () {
      const postStore = usePostsStore()
      return { postStore }
    },
  }
</script>
