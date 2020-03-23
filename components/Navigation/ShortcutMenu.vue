<template>
  <nav class="shortcut-menu-component" v-if="shorcutMenu">
    <ul class="menu-items justify-content-space-around">
      <li class="menu-item"><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/blog">Forum</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/blog">Perfil</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShortcutMenu',
  computed: {
    ...mapState({
      shorcutMenu: state => state.shorcutMenu
    })
  },
  methods: {
    ...mapActions(['toggleVisibilityShortcutMenu'])
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.shortcut-menu-component {
  display: none;

  @media only screen and (max-width: $breakpoint-sm) {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0px;
    min-height: 40px;
    background: $dark-secondary-color;
    z-index: 2;
  }

  .menu-items {
    display: flex;
    width: 100%;
    list-style: none;
    background: $black-with-transparency;

    .menu-item {
      display: flex;
      align-items: center;
      a {
        color: $white-color;
        font-size: 12px;
        text: {
          decoration: none;
          transform: uppercase;
        }
      }
    }
  }

}

</style>
