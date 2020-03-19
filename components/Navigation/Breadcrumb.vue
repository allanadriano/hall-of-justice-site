<template>
  <div class="breadcrumb-component">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <nuxt-link :to="`/${route}`">{{ route }}</nuxt-link>
      </li>
      <li class="breadcrumb-item" v-if="category">
        <nuxt-link :to="category"> {{ category }}</nuxt-link>
      </li>
      <li class="breadcrumb-item" v-if="title">
        {{ title }}
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
    route: {
      type: String,
      default: 'blog',
    },
    category: {
      type: String,
      default: 'Séries',
    },
    title: {
      type: String,
    },
    simpleNavigation: {
      type: Boolean,
      default: false
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

      if (this.simpleNavigation === true) {
        return false
      }

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
  margin-bottom: 30px;
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
    z-index: 1;

    .breadcrumb {
      margin: 0 auto;
      max-width: 1200px;
    }
  }
}
</style>
