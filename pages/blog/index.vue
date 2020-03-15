<template>
  <div class="blog-feed-component container">
    <div class="row">
      <div class="col-md-9">
        <article class="card blog">
          <img class="card-img blog" src="https://placehold.it/1200x500" alt="Nome da matéria" />
          <div class="card-body">
            <h2>Nome da máteria</h2>
            <p>descrição da materia</p>
          </div>
        </article>
        <article class="card blog">
          <img class="card-img blog" src="https://placehold.it/1200x700" alt="Nome da matéria" />
          <div class="card-body">
            <h2>Nome da máteria</h2>
            <p>descrição da materia</p>
          </div>
        </article>
      </div>
      <div class="col-md-3">
        <aside>
          menu lateral
        </aside>
      </div>
    </div>

  </div>
</template>

<script>
import BlogService from '~/services/BlogService'

export default {
  name: 'BlogFeed',
  methods: {
    async getArticles () {
      this.posts = await BlogService.getArticles()
      console.log('posts'. getArticles())
    }
  },
  mounted () {
    this.getArticles();
  }
}

</script>
