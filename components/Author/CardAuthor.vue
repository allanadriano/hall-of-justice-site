<template>
  <div class="card-author-component">
    <img src="https://placehold.it/200x200" :alt="author.name" class="img-author">
    <div class="social">
      <h2 class="author-name">{{ author.name }}</h2>
      <p class="author-bio">{{ author.bio }}</p>
      <div class="social-media">
        buttons
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CardAuthor',
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.card-author-component {
  background: $dark-secondary-color;
  color: $white-color;
  padding: 20px;
  display: flex;
  align-items: center;

  .img-author {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .social {
    margin-left: 20px;
    .author-name {
      text-transform: uppercase;
      font: {
        size: 22px;
        weight: 500
      }
    }
    .author-bio {
      opacity: 0.9;
      font-size: 16px;
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }
}

</style>

