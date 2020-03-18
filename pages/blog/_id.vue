<template>
  <div class="blog-post-component container">
    <div class="row">
      <div class="col-md-12">
        <hall-breadcrumb :title="post.title" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-9">
        <article class="card blog">
          <img src="https://placehold.it/1200x500" :alt="post.title" class="card-img blog post"  />
          <div class="card-body">
            <h1 class="card-title blog">{{ post.title }}</h1>
            <span class="date post">23 de janeiro de 2019</span>
            <hall-chip info="Cinema" />
            <p class="card-post description">{{ post.body }}</p> <!-- <<- post.description -->
            <p class="card-post" v-html="post.body"></p>
            <p class="card-post source">Fonte: <a href="#">Hall Of Justice</a></p>
          </div>
          <hall-card-author :author="author" />
          <div class="card-body">
            <hall-policy />
            <vue-disqus shortname="hall-of-justice" />
          </div>
        </article>

        <hall-pagination />

      </div>
      <div class="col-md-3">
        <aside>menu lateral</aside>
      </div>
    </div>

  </div>
</template>

<script>
import BlogService from '~/services/BlogService'
import HallCardAuthor from '~/components/Author/CardAuthor'
import HallChip from '~/components/Chip'
import HallPolicy from '~/components/Policy'
import HallBreadcrumb from '~/components/Navigation/Breadcrumb'
import HallPagination from '~/components/Navigation/Pagination'

export default {
  name: 'BlogPost',
  data () {
    return {
      post: {},
      author: {
        name: 'Allan Oliveira',
        bio: 'Gosta de series, cinemas e outros assuntos nerds'
      }
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
  },
  components: {
    HallCardAuthor,
    HallChip,
    HallPolicy,
    HallBreadcrumb,
    HallPagination
  }
}
</script>
