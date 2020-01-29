<template>
  <section class="container">
    <div class="row">
      <div class="col-xl-4">
        col-xl-4
      </div>
      <div class="col-xl-6">
        col-xl-6
      </div>
      <div class="col-xl-2">
        col-xl-2
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        col-lg-6
      </div>
      <div class="col-lg-4">
        col-lg-4
      </div>
      <div class="col-lg-2">
        col-lg-2
      </div>
    </div>

    <div class="row">
      <div class="col-md-7">
        col-md-7
      </div>
      <div class="col-md-4">
        col-md-4
      </div>
      <div class="col-md-1">
        col-md-1
      </div>
    </div>

    <div class="row">
      <div class="col-sm-9">
        col-sm-9
      </div>
      <div class="col-sm-1">
        col-sm-1
      </div>
      <div class="col-sm-2">
        col-sm-2
      </div>
    </div>

    <div class="row">
      <div class="col-2">
        col-2
      </div>
      <div class="col-6">
        col-6
      </div>
      <div class="col-4">
        col-4
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Grids'
}
</script>

<style lang="css">
.row {
  margin-bottom: 20px;
}
div[class^='col-'] {
  border: 1px solid #ccc;
  min-height: 32px;
  margin-bottom: 4px;
}
</style>
