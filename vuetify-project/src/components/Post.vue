<template>
  <v-list-item
    rounded="lg"
    :subtitle="`id: ${id}`"
    :title="`${name}`"
  >
    <template #append>
      <div class="d-flex justify-space-between">
        <v-btn
          color="orange-lighten-4"
          icon="mdi-pencil"
          size="x-small"
          variant="tonal"
        />
        <v-btn
          color="red-darken-1"
          icon="mdi-close"
          size="x-small"
          variant="tonal"
          @click="postStore.deletePost(id)"
        />
      </div>

    </template>
  </v-list-item>
  <v-divider />
</template>

<script setup>
  import { usePostsStore } from '@/stores/posts'
  const postStore = usePostsStore()
  defineProps({
    id: String,
    name: String,
  })
</script>
