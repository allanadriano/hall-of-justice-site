<template>
  <article class="card-feed-component card blog">
    <nuxt-link :to="`blog/${blog.id}`" class="card-link">
      <img class="card-img blog" src="https://placehold.it/1200x500" :alt="blog.title" />
      <div class="card-body">
        <h2 class="card-title blog">{{ blog.title }}</h2>
        <p class="card-post">{{ blog.body | truncate(120, '...') }}</p> <!-- <<- blog.description -->
      </div>
    </nuxt-link>
  </article>
</template>
<script>
import truncate from '~/filters/truncate'

export default {
  name: 'CardFeed',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  filters: {
    truncate
  }
}
</script>
