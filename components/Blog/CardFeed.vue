<template>
  <article :class="['card-feed-component card blog', { 'dark-mode' : darkMode }]">
    <nuxt-link :to="`blog/${blog.id}`" class="card-link">
    <div class="card-overlay">
      <img class="card-img blog" :src="`/img-${blog.id}.jpg`" :alt="blog.title" />
      <h2 class="card-title blog feed">{{ blog.title }}</h2>
    </div>
    </nuxt-link>
    <div class="card-body info">
      <hall-chip value="Allan Oliveira"/>
      <span class="date">12 de janeiro de 2020</span>
      <hall-chip value="Cinema" />
      <nuxt-link :to="`blog/${blog.id}`">Leia matéria</nuxt-link>
    </div>
    <div class="card-body">
      <p class="card-post feed">{{ blog.body | truncate(120, '...') }}</p> <!-- <<- blog.description -->
    </div>
  </article>
</template>
<script>
import { mapState } from 'vuex'
import HallChip from '~/components/Chip'
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
  },
  components: {
    HallChip
  },
  computed: {
    ...mapState({
      darkMode: state => state.darkMode
    })
  },
}
</script>
