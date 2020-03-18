<template>
  <ul class="menu-items-component menu">
    <li class="menu-item">
      <nuxt-link to="/blog">Blog</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/forum">Forum</nuxt-link>
    </li>
    <li class="menu-item">
      <nuxt-link to="/contato">Contato</nuxt-link>
    </li>
    <li class="menu-item first-item-mobile">
      <a href="#">
        Login
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuItems'
}
</script>
