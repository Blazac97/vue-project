<template>
  <v-hover
    v-slot="{ isHovering, props }"
    close-delay="200"
  >
    <v-list-item
      class="d-flex align-center justify-space-between  "
      :class="{ 'on-hover': isHovering }"
      :elevation="isHovering ? 16 : 2"
      height="6vw"
      rounded="lg"
      :subtitle="`id: ${id}`"
      :title="`${name}`"
      v-bind="props"
    >
      <template #append>
        <div class="d-flex justify-space-between mr-4">
          <v-btn
            class="mr-6"
            color="orange-lighten-4"
            icon="mdi-pencil"
            variant="tonal"
          />
          <v-btn
            color="red-darken-1"
            icon="mdi-close"
            variant="tonal"
            @click="postStore.deletePost(id)"
          />
        </div>
      </template>
    </v-list-item>
    <v-divider />
  </v-hover>
</template>

<script setup>
  import { usePostsStore } from '@/stores/PostsStore'
  const postStore = usePostsStore()
  defineProps({
    id: String,
    name: String,
  })
</script>
<style lang="sass" scoped>
.v-list-item.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.2)
  >.v-list-item__text
    color: #000
</style>
