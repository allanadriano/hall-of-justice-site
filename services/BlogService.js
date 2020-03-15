// import http from './HttpService'

export default {
  async getArticles(data) {
    const response = await this.$axios.$get('/posts', data)
    return response.data
  },
  async getArticle(data, id) {
    const response = await this.$axios.$get('/posts/' + id, data)
    return response.data
  }
}
