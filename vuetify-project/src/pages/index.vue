<template>
  <v-card
    class="mx-auto"
    max-width="70vw"
  >
    <v-card-title>
      Posts
      <v-form>
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
              <v-btn
                color="green-accent-4"
                prepend-icon="mdi-plus-box"
                rounded="lg"
                size="x-large"
                variant="tonal"
              > Add </v-btn>

            </v-col>

          </v-row>
        </v-container>
      </v-form>
    </v-card-title>

    <v-divider />

    <v-virtual-scroll
      v-if="postStore.data"
      height="50vw"
      item-height="28"
      :items="postStore.data"
    >
      <template #default="{ item }">
        <Post :id="item.id" :name="item.name" />
      </template>

    </v-virtual-scroll>
    <v-input
      v-model="postStore.searchText"
      placeholder="Search by name..."
    />

  </v-card>
</template>

<script setup lang="ts">
  import { usePostsStore } from '@/stores/posts'
  const postStore = usePostsStore()

  onMounted(() => {
    console.log(postStore.data)
  })
</script>
