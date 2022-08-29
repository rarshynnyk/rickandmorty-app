<template>
  <v-app-bar-title>
    <nuxt-link :to="RoutePath.Root">
      <v-img src="logo.svg" width="150" />
    </nuxt-link>
  </v-app-bar-title>
</template>

<script setup lang="ts">
  import { RoutePath } from '~/constants/route'
</script>
