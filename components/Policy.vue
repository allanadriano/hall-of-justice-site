<template>
  <p class="policy-component">
    Seja sensato, você é responsável pelo que posta. Comentários que comprometam a ética e a imagem
    da Hall of Justice e também de seus membros e leitores, serão excluídos. Para mais informações
    visite nossas paginas de <nuxt-link to="/blog">Termos de Uso</nuxt-link> e
    <nuxt-link to="/blog">Politica de Privacidade</nuxt-link>.
  </p>
</template>

<script>
export default {
  name: 'Policy'
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.policy-component {
  padding: 10px;
  background: #efefef;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.2;
  opacity: 0.9;

  @media only screen and (max-width: $breakpoint-xs) {
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
