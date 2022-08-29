<template>
  <div>
    <Title>Characters</Title>

    <home-hero-banner />

    <v-container>
      <v-row no-gutters justify="center">
        <v-col sm="8">
          <v-text-field
            v-model="searchInput"
            placeholder="Search character"
            clearable
          />
        </v-col>
      </v-row>

      <div v-if="loading" class="text-center">
        <v-progress-circular />
      </div>

      <template v-else-if="hasNoResultsState">
        <div class="text-h4 font-weight-light text-center">No results</div>
      </template>

      <template v-else-if="!loading && result">
        <v-row class="mb-4">
          <v-col
            v-for="item in result.characters.results"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            xl="3"
          >
            <characters-card
              :name="item.name"
              :image="item.image"
              :status="item.status"
            />
          </v-col>
        </v-row>

        <template v-if="result.characters.info">
          <v-pagination v-model="page" :length="result.characters.info.pages" />
        </template>
      </template>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  const searchInput = ref('foo')
  const debouncedSearchInput = refDebounced(searchInput, 300)

  const { page, search } = useCharactersFilters()
  const { loading, result } = useCharactersList(
    reactive({
      page,
      filter: {
        name: search,
      },
    })
  )

  const hasNoResultsState = computed(
    () => !loading.value && result.value.characters.results.length === 0
  )

  watch(debouncedSearchInput, value => {
    search.value = value
  })
</script>
