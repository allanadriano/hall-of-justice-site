<template>
  <li :class="['settings-site-component menu-item', { 'active' : isOpen }]">
    <a @click="toggleMenu" :class="{'active' : isOpen }">
      icon <span class="hide-medium">Configurações do site</span>
    </a>
    <ul :class="['menu-sub-items', { 'hide' : !isOpen }]">
      <li class="menu-sub-item">
        <span>Modo dark</span>
          <hall-button-switch
            :value="darkMode"
            @change="toggleDarkMode"
          />
      </li>
      <li class="menu-sub-item hide-medium">
        <span>menu de atalhos</span>
          <hall-button-switch
            :value="shorcutMenu"
            @change="toggleVisibilityShortcutMenu"
          />
      </li>
    </ul>
  </li>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HallButtonSwitch from '~/components/ButtonSwitch'

export default {
  name: 'ShortcutMenu',
  data: () => ({
    isOpen: false
  }),
  components: {
    HallButtonSwitch
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  },
  computed: {
    ...mapState({
      shorcutMenu: state => state.shorcutMenu,
      darkMode: state => state.darkMode
    })
  },
  mounted() {
    window.addEventListener('click', this.clickOutSideMenuMobile)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clickOutSideMenuMobile)
  },
  methods: {
    ...mapActions(['toggleVisibilityShortcutMenu', 'toggleDarkMode']),
    toggleMenu () {
      this.isOpen = !this.isOpen
    },
    closeMenu () {
      this.isOpen = false
    },
    clickOutSideMenuMobile(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

</style>
