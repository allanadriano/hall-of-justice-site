<template>
  <div class="blog-post-component container">
    <!-- breadcrumb -->
    <div class="row">
      <div class="col-md-9">
        <article class="card blog">
          <img src="https://placehold.it/1200x500" :alt="post.title" class="card-img"  />
          <div class="card-body">
            <h1 class="card-title blog">{{ post.title }}</h1>
            <p class="card-post" v-html="post.body"></p>
          </div>
        </article>
      </div>
      <div class="col-md-3">
        <aside>menu lateral</aside>
      </div>
    </div>

  </div>
</template>

<script>
import BlogService from '~/services/BlogService'

export default {
  name: 'BlogPost',
  data () {
    return {
      post: {}
    }
  },
  methods: {
    async getSingleArticle (id) {
      this.post = await BlogService.getSingleArticle(id);
    }
  },
  watch: {
    '$route' () {
      this.getSingleArticle(this.$route.params.id);
    }
  },
  mounted () {
    this.getSingleArticle(this.$route.params.id);
  }
}
</script>
