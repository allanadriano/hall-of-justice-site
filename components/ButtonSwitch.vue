<template>
  <div class="button-switch-component">
    <label class="switch">
      <input type="checkbox"
        @input="onInput"
        :checked="value"
      />
      <span class="slider" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'ButtonSwitch',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  methods: {
    onInput () {
      this.$emit('change');
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.button-switch-component {
  display: inline-flex;

  .switch {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 10px;
    margin-bottom: 0px;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .slider {
        background: $light-slate-blue-color;
      }

      &:checked + .slider {
        &:before {
          transform: translateX(14px);
          background: $white-color;
        }
      }
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: .4s;
      border-radius: 19px;
      background: $dark-secondary-color;

      &:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        border-radius: 50%;
        left: 0px;
        bottom: 0px;
        top: -2px;
        right: 0px;
        background: $dark-primary-color;
        transition: .4s;
      }
    }
  }
}

</style>
