<template>
  <transition name="navbar">
    <nav v-if="isShowNavbar" class="navbar-component navbar navbar-fixed">
      <div class="container justify-content-space-between">
        <nuxt-link to="/" class="brand">
          <span class="icon-brand" />
          Hall of Justice
        </nuxt-link>

        <hall-menu-items class="hide-menu-sm" />

        <transition name="menu-mobile">
          <div
            v-if="isMenuMobileOpen"
            :class="['menu-mobile', { open: isMenuMobileOpen }]"
          >
            <hall-menu-items />
            <hall-menu-items-blog />
            <hall-menu-items-forum v-if="isUserLogged" />
          </div>
        </transition>

        <span @click="toggleMenuMobile" class="btn-menu-mobile">
          Menu
        </span>
      </div>
    </nav>
  </transition>
</template>

<script>
import HallMenuItems from '~/components/Navigation/MenuItems'
import HallMenuItemsBlog from '~/components/Navigation/Blog/MenuItemsBlog'
import HallMenuItemsForum from '~/components/Navigation/Forum/MenuItemsForum'

export default {
  name: 'Navbar',
  components: {
    HallMenuItems,
    HallMenuItemsBlog,
    HallMenuItemsForum
  },
  data: () => ({
    isMenuMobileOpen: false,
    isUserLogged: true, // implement later with vuex
    isShowNavbar: true,
    lastScrollPx: 0
  }),
  watch: {
    $route() {
      this.closeMenuMobile()
      this.lastScrollPx = 0
    }
  },
  mounted() {
    window.addEventListener('click', this.clickOutSideMenuMobile)
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clickOutSideMenuMobile)
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenuMobile() {
      this.isMenuMobileOpen = !this.isMenuMobileOpen

      if (this.isMenuMobileOpen === true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'initial'
      }
    },
    openMenuMobile() {
      this.isMenuMobileOpen = true
    },
    closeMenuMobile() {
      this.isMenuMobileOpen = false
    },
    clickOutSideMenuMobile(e) {
      if (!this.$el.contains(e.target)) {
        this.isMenuMobileOpen = false
        document.body.style.overflow = 'initial'
      }
    },
    hideNavbar() {
      this.isShowNavbar = false
    },
    handleScroll() {
      if (window.scrollY === 0) {
        this.isShowNavbar = true
      } else if (this.lastScrollPx > 0) {
        this.isShowNavbar = window.scrollY < this.lastScrollPx
      } else {
        this.isShowNavbar = false
      }

      this.lastScrollPx = window.scrollY
      if (!this.isShowNavbar) {
        this.hideNavbar()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_menu-mobile.scss';

.navbar-enter-active,
.navbar-leave-active {
  transition: all 0.2s ease;
}
.navbar-enter,
.navbar-leave-to {
  transform: translateY(-100%);
  transition: all 150ms ease-in 0s;
}

.navbar-component {
  .container {
    position: relative;
  }
  .menu-mobile-enter-active,
  .menu-mobile-leave-active {
    transition: transform 0.2s ease;
  }

  .menu-mobile-enter,
  .menu-mobile-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s;
  }
}
</style>
