<template>
  <v-app>
    <v-main>
      <router-view v-if="postStore.data" />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { usePostsStore } from '@/stores/posts'
  const postStore = usePostsStore()

  onMounted(() => {
    postStore.initialize()
  })
</script>
