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
    <br />
    <br />

    <nuxt />
    <hall-shorcut-menu />
  </div>
</template>

<script>
import HallNavbar from '~/components/Navigation/Site/Navbar'
import HallNavbarBlog from '~/components/Navigation/Blog/NavbarBlog'
import HallBreadcrumb from '~/components/Navigation/Breadcrumb'
import HallShorcutMenu from '~/components/Navigation/ShortcutMenu'

export default {
  name: 'BlogLayout',
  components: {
    HallNavbar,
    HallNavbarBlog,
    HallBreadcrumb,
    HallShorcutMenu
  }
}
</script>
