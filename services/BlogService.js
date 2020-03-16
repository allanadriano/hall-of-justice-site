import axios from '~/plugins/axios'

export default {
  async getAllArticles(data) {
    const response = await axios.get('/posts', data)
    return response.data
  },
  async getSingleArticle(id, data) {
    const response = await axios.get('/posts/' + id, data)
    return response.data
  }
}
