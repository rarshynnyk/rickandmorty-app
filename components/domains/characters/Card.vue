<template>
  <v-card variant="outlined" height="100%">
    <v-row no-gutters>
      <v-col cols="5">
        <v-responsive :aspect-ratio="1">
          <v-img :src="image" :alt="name" />
        </v-responsive>
      </v-col>
      <v-col cols="7">
        <v-card-item>
          <h5 class="text-h5 font-weight-light">{{ name }}</h5>
          <characters-status :status="status" />
        </v-card-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
  import { Character } from '~/types/generated/graphql'

  defineProps<{
    name: Character['name']
    image: Character['image']
    status: Character['status']
  }>()
</script>
