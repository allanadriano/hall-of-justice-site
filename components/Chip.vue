<template>
  <nuxt-link to="/blog" class="chip-component chip">
    <img src="/allan.jpg" :alt="value" />
    {{ value }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
