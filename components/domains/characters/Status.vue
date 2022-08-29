<template>
  <div class="d-flex align-center">
    {{ status }}
    <v-badge dot inline :color="badgeColor" />
  </div>
</template>

<script setup lang="ts">
  import { Character } from '~/types/generated/graphql'

  const props = defineProps<{ status: Character['status'] }>()

  const badgeColor = computed(() => {
    switch (props.status) {
      case 'Alive':
        return 'rgb(85, 204, 68)'
      case 'Dead':
        return 'rgb(214, 61, 46)'
      default:
        return 'rgb(158, 158, 158)'
    }
  })
</script>
