<template>
  <v-hover
    v-slot="{ isHovering, props }"
    close-delay="200"
  >
    <v-list-item
      :key="id"
      class="d-flex align-center justify-space-between "
      :class="{ 'on-hover': isHovering ,'bg-grey-darken-3':isSelected}"
      :elevation="isHovering ? 16 : 2"
      height="6vw"
      rounded="lg"
      :subtitle="`id: ${id}`"
      :title="`${name}`"
      v-bind="props"
      @click="$emit(`onClick`)"
    >
      <template #append>
        <div class="d-flex justify-space-between  mr-6">
          <PostModal :id="id" :name="name" @on-submit="postStore.updatePost">
            <template #activator>
              <v-btn
                class="mr-6"
                color="orange-lighten-4"
                icon="mdi-pencil"
                variant="tonal"
              />
            </template>
          </postmodal>
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

<script lang="ts">
  import { usePostsStore } from '@/stores/posts'
  export default {
    props: ['name', 'id', 'isSelected'],
    emits: ['onClick'],
    setup () {
      const postStore = usePostsStore()
      return { postStore }
    },
  }
</script>

<style lang="sass" scoped>
.v-list-item.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.2)
  >.v-list-item__text
    color: #000
</style>
