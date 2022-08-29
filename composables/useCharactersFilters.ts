import { QueryParams } from '~/constants/query-params'

export function useCharactersFilters() {
  const route = useRoute()
  const router = useRouter()

  const search = computed({
    get() {
      return (route.query[QueryParams.Search] as string) || undefined
    },
    set(value) {
      router.push({
        query: Object.assign(
          {},
          {
            ...route.query,
            [QueryParams.Search]: value,
            [QueryParams.Page]: 1,
          }
        ),
      })
    },
  })

  const page = computed({
    get() {
      return Number(route.query[QueryParams.Page]) || 1
    },
    set(value) {
      router.push({
        query: Object.assign({}, { ...route.query, [QueryParams.Page]: value }),
      })
    },
  })

  return {
    page,
    search,
  }
}
