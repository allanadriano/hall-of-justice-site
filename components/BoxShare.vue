<template>
  <div class="box-share-component">
    <p>Compartilhe em suas redes:</p>
    <span>
      <div id="fb-root"></div>
      <a :href="`https://www.facebook.com/sharer.php?display=page&u=${url}`">Facebook</a>
      <a :href="`https://twitter.com/intent/tweet?text=${title} - ${url}`">Twitter</a>
      <a :href="`https://wa.me/?text=${title} - ${url}`">Whatsapp</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BoxShare',
  props: {
    url: {
      type: String
    },
    title: {
      type: String
    }
  },
}
</script>

<style>

</style>
