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

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <hall-breadcrumb />
        </div>
      </div>
    </div>
    <br />

    <nuxt />
  </div>
</template>

<script>
import HallNavbar from '~/components/Navigation/Site/Navbar'
import HallNavbarBlog from '~/components/Navigation/Blog/NavbarBlog'
import HallBreadcrumb from '~/components/Navigation/Breadcrumb'

export default {
  name: 'BlogLayout',
  components: {
    HallNavbar,
    HallNavbarBlog,
    HallBreadcrumb
  }
}
</script>
