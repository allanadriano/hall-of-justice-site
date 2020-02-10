<template>
  <nav class="navbar-blog navbar">
    <div class="container justify-content-flex-end">
      <ul class="menu">
        <hall-menu-items-blog />
      </ul>
    </div>
  </nav>
</template>

<script>
import HallMenuItemsBlog from './MenuItemsBlog'

export default {
  name: 'NavbarBlog',
  components: {
    HallMenuItemsBlog
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.navbar-blog {
  @media only screen and (max-width: $breakpoint-sm) {
    display: none;
  }
}
</style>
