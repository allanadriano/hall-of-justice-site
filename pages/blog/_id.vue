<template>
  <div class="blog-post-component container">
    <div class="row">
      <div class="col-md-12">
        <hall-breadcrumb :title="post.title" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-9">
        <article :class="['card blog', { 'dark-mode' : darkMode }]">
          <img :src="`/img-${post.id}.jpg`" :alt="post.title" class="card-img blog post"  />
          <div class="card-body">
            <h1 class="card-title blog">{{ post.title }}</h1>
            <span class="date post">23 de janeiro de 2019</span>
            <hall-chip value="Cinema" />
            <p class="card-post description">{{ post.body }}</p> <!-- <<- post.description -->
            <p class="card-post" v-html="post.body"></p>
            <p class="card-post source">Fonte: <a href="#">Hall Of Justice</a></p>
          </div>
          <hall-card-author :author="author" />
          <div class="card-body policy">
            <hall-policy />
          </div>
          <div class="card-body">
            <hall-box-share :title="post.title" :url="urlArticle"/>
          </div>
          <div class="card-body">
            <vue-disqus shortname="hall-of-justice" :identifier="`blog/${post.id}`" :url="urlArticle"/>
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
import HallCardAuthor from '~/components/Author/CardAuthor'
import HallChip from '~/components/Chip'
import HallPolicy from '~/components/Policy'
import HallBreadcrumb from '~/components/Navigation/Breadcrumb'
import HallBoxShare from '~/components/BoxShare'
import { mapState } from 'vuex'
import config from '~/config'
import axios from 'axios'

export default {
  name: 'BlogPost',
  data:() => ({
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    image: 'https://placehold.it/1200x500&text=post image',
    author: {
      name: 'Allan Oliveira',
      bio: 'Especialista em assuntos nerds como cinemas, séries e afins. '
    }
  }),
  async asyncData ({ params }) {
    const { data } = await axios.get(`${config.api.url}/posts/${params.id}`)
    return { post: data }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        { name: 'url', content: config.app.url + this.$route.fullPath },
        { name: 'type', content: 'article' },
        { name: 'title', content: this.post.title },
        { name: 'description', content: this.description },
        { name: 'image', content: this.image },
        { name: 'twitter:creator', content: this.author.name },
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.image },
        { property: 'og:url', content: config.app.url + this.$route.fullPath },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.post.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: this.image },
      ],
    };
  },
  components: {
    HallCardAuthor,
    HallChip,
    HallPolicy,
    HallBreadcrumb,
    HallBoxShare
  },
  computed: {
    urlArticle () {
      return config.app.url + this.$route.fullPath
    },
    ...mapState({
      darkMode: state => state.darkMode
    })
  },
}
</script>
