<template>
  <v-dialog max-width="340">
    <template #activator="{ props: activatorProps }">

      <div v-bind="activatorProps">
        <slot name="activator" />
      </div>

    </template>
    <template #default="{ isActive }">
      <v-card
        class="mx-auto"
        max-width="70vw"
      >
        <v-card-title>
          Post
          <v-container>
            <v-row>

              <v-col
                cols="20"
                md="9"
              >
                <v-text-field
                  v-model="postName"
                  hide-details
                  label="Name"
                  required
                  rounded="lg"
                  width="30vw"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>
        <v-divider />
        <template #actions>
          <v-container>
            <v-col>
              <v-row>
                <v-btn
                  class="ml-auto mr-2"
                  color="red-darken-1"
                  text="Cancel"
                  variant="tonal"
                  @click="isActive.value = false"
                />
                <v-btn
                  color="green-accent-4"
                  :disabled="!postName"
                  text="Save"
                  variant="tonal"
                  @click="$emit(`onSubmit`,{name:postName,id:postId});isActive.value = false"
                />
              </v-row>
            </v-col>
          </v-container>
        </template>
      </v-card>
    </template>
  </v-dialog>

</template>

<script lang="ts">
  export default {
    props: ['name', 'id'],
    emits: ['onSubmit'],
    data: () => ({
      postName: '',
      postId: '',
    }),
    created () {
      this.postName = this.name
      this.postId = this.id
    },

  }
</script>
