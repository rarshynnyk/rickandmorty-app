<template>
  <v-text-field v-model="input" />
</template>

<script setup lang="ts">
  const emit = defineEmits<{ (e: 'input', value?: string): void }>()

  const input = ref('')
  const debounced = refDebounced(input, 300)

  watch(debounced, () => {
    return emit('input', input.value)
  })
</script>
