export default {
  app: {
    url: `${process.env.VUE_APP_BASE_URL || 'https://hall-blog.herokuapp.com/'}`
  },
  api: {
    url: `${process.env.VUE_APP_API_URL ||
      'https://jsonplaceholder.typicode.com'}`
  }
}
