<template>
  <div class="blog-feed-component container">
    <div class="row">
      <div class="col-md-12">
        <hall-breadcrumb :simpleNavigation="true" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <hall-card-feed
          v-for="blog in posts"
          :key="blog.id"
          :blog="blog"
        />
      </div>
      <div class="col-md-4">
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
import HallBreadcrumb from '~/components/Navigation/Breadcrumb'

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
    HallCardFeed,
    HallBreadcrumb
  }
}

</script>
