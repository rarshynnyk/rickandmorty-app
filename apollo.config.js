module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: 'https://rickandmortyapi.com/graphql',
    },
    // Files processed by the extension
    includes: ['composables/**/*.ts', 'composables/*.ts'],
  },
}
