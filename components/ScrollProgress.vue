<template>
  <div class="scroll-progress-component">
    <span class="progress-bar" />
  </div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  mounted () {
    window.addEventListener('scroll', this.handleScrollProgress)
    this.handleScrollProgress()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScrollProgress)
  },
  methods: {
    handleScrollProgress () {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      document.querySelector('.progress-bar').style.width = scrolled + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.scroll-progress-component {
  width: 100%;
  display: flex;
  height: 3px;
  background: $dark-color;

  .progress-bar {
    background: $light-slate-blue-color
  }
}

</style>
