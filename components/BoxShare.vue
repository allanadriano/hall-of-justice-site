<template>
  <div class="box-share-component">
    <p>Compartilhe em suas redes:</p>
    <span>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a :href="`https://wa.me/?text=`" target="_blank">Whatsapp</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BoxShare',
  props: {
    url: {
      type: Object
    }
  }
}
</script>

<style>

</style>
