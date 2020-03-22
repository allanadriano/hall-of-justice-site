<template>
  <div class="card-author-component">
    <span>
      <img src="https://placehold.it/200x200" :alt="author.name" class="img-author">
    </span>
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

    @media only screen and (max-width: $breakpoint-xs) {
      width: 70px;
      height: 70px;
    }
  }

  .social {
    margin-left: 20px;
    .author-name {
      text-transform: uppercase;
      font: {
        size: 22px;
        weight: 500
      }

      @media only screen and (max-width: $breakpoint-xs) {
        font-size: 16px;
      }
    }
    .author-bio {
      opacity: 0.9;
      font-size: 16px;
      margin-top: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;

      @media only screen and (max-width: $breakpoint-xs) {
        font-size: 12px;
      }
    }
  }
}

</style>

