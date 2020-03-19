<template>
  <nav class="pagination-component pagination">
    <nuxt-link to="/" class="prev">Anterior</nuxt-link>

    <ul class="pagination-itens">
      <!-- insert pages-->
      <li class="pagination-item page">
        <nuxt-link to="/" class="active">1</nuxt-link>
      </li>
      <li class="pagination-item page">
        <nuxt-link to="/">2</nuxt-link>
      </li>
    </ul>

    <nuxt-link to="/" class="next">Próximo</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>
