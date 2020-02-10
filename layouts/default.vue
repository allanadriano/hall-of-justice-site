<template>
  <div>
    <hall-navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hall-navbar-blog />
    <nuxt />
  </div>
</template>

<script>
import HallNavbar from '@/components/Navigation/Navbar'
import HallNavbarBlog from '@/components/Navigation/Blog/NavbarBlog'

export default {
  name: 'BlogLayout',
  components: {
    HallNavbar,
    HallNavbarBlog
  }
}
</script>
