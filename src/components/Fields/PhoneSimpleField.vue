<template>
  <label class="input-component">
    <span class="input-component__label">{{label}}</span>
    <MaskedInput
      :mask="['+', '7', '(' ,/\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]"
      :guide="false"
      :onFocus="onFocus"
      :onBlur="onBlur"
      :name="name"
    />
  </label>
</template>

<script>
  import MaskedInput from 'vue-text-mask';

  export default {
    name: 'PhoneSimpleField',
    components: {
      MaskedInput,
    },
    props: {
      label: {
        type: String,
        default: 'Phone'
      },
      name: {
        type: String,
        default: 'name'
      },
      onChange: {
        type: Function,
        default: () => {}
      },
      onFocus: {
        type: Function,
        default: () => {}
      },
      onBlur: {
        type: Function,
        default: () => {}
      },
      value: {
        type: null,
        value: ''
      },
      countryCode: {
        type: String,
        default: 'RU'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .phone {
    &__icon {
      fill: $gray-dark;
      &._open {
        fill: $blue-dark;
      }
    }

    &__input {
      width: 100%;
    }
  }

</style>
