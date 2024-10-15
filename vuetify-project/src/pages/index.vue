<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title>
      Posts
    </v-card-title>

    <v-divider />

    <v-virtual-scroll
      v-if="postStore.data"
      height="320"
      item-height="48"
      :items="postStore.data"
      margin="30"
    >
      <template #default="{ item }">
        <v-list-item
          :subtitle="`${item.id}`"
          :title="`${item.name}`"
        >

          <template #append>
            <div>
              <v-btn
                icon="mdi-pencil"
                size="x-small"
                variant="tonal"
              />
              <v-btn
                icon="mdi-close"
                size="x-small"
                variant="tonal"
              />
            </div>

          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script setup lang="ts">
  import { usePostsStore } from '@/stores/posts'
  const postStore = usePostsStore()

  onMounted(() => {
    console.log(postStore.data)
  })
</script>
