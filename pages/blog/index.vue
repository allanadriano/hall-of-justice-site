<template>
  <div class="blog-feed-component container">
    <!-- breadcrumb -->
    <div class="row">
      <div class="col-md-9">
        <hall-card-feed
          v-for="blog in posts"
          :key="blog.id"
          :blog="blog"
        />
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
import HallCardFeed from '~/components/Blog/CardFeed'
import BlogService from '~/services/BlogService'

export default {
  name: 'BlogFeed',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getAllArticles () {
      this.posts = await BlogService.getAllArticles();
    }
  },
  mounted () {
    this.getAllArticles();
  },
  components: {
    HallCardFeed
  }
}

</script>
