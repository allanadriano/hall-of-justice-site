<template>
  <div class="breadcrumb-component">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link to="/1">Home</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <nuxt-link to="/2">Blog</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <nuxt-link to="/3">Séries</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        Séries que ainda despertam o interesse 10 anos depois
      </li>
    </ol>
    <hall-scroll-progress v-if="isShowScroolProgress" />
  </div>
</template>

<script>
import HallScrollProgress from '~/components/ScrollProgress'
export default {
  name: 'Breadcrumb',
  components: {
    HallScrollProgress
  },
  props: {
    breadcrumb: {
      type: Object
    }
  },
  data: () => ({
    isShowScroolProgress: false
  }),
  mounted() {
    window.addEventListener('scroll', this.scrollTopFixed)
    this.scrollTopFixed()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollTopFixed)
  },
  methods: {
    scrollTopFixed() {
      let element = document.querySelector('.breadcrumb-component')

      if (window.pageYOffset > 200) {
        element.classList.add('breadcrumb-fixed')
        this.isShowScroolProgress = true
      } else {
        element.classList.remove('breadcrumb-fixed')
        this.isShowScroolProgress = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.breadcrumb-component {
  @media only screen and (max-width: $breakpoint-xs) {
    display: none
  }
  &.breadcrumb-fixed {
    background: $dark-secondary-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;

    .breadcrumb {
      margin: 0 auto;
      max-width: 1200px;
    }
  }
}
</style>
