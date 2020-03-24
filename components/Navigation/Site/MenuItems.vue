<template>
  <ul class="menu-items-component menu">
    <li :class="['menu-item', { 'active': subIsActive('/blog') }]">
      <nuxt-link to="/blog">Blog</nuxt-link>
    </li>
    <li :class="['menu-item', { 'active': subIsActive('/forum') }]">
      <nuxt-link to="/forum">Forum</nuxt-link>
    </li>
    <li :class="['menu-item', { 'active': subIsActive('/contato') }]" >
      <nuxt-link to="/contato">Contato</nuxt-link>
    </li>
    <li class="menu-item first-item-mobile">
      <a href="#">
        Login
      </a>
    </li>
    <hall-settings-site />
  </ul>
</template>

<script>
import HallSettingsSite from './SettingsSite'
export default {
  name: 'MenuItems',
  components: {
    HallSettingsSite
  },
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];

      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0
        })
    }
  }
}
</script>
