<template>
  <nuxt-link to="/blog" class="chip-component chip">
    <img src="https://placehold.it/50x50" :alt="info" />
    {{ info }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    info: {
      type: String,
      required: true
    }
  }
}
</script>
