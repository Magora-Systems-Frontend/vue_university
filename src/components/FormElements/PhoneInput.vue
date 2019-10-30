<template>
  <div class="form-group">
    <label class="input-component">{{label}}</label>
    <MaskedInput
            class="form-control"
            :mask="['+', '7', '(' ,/\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-' , /\d/, /\d/, '-', /\d/, /\d/]"
            :value="value"
            :guide="false"
            :onFocus="onFocus"
            :onBlur="onBlur"
            :name="name"
    />
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
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
      value: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: 'name'
      },
      error: {
        type: String,
        default: ''
      },
      onChange: {
        type: Function,
        default: () => {
        }
      },
      onFocus: {
        type: Function,
        default: () => {
        }
      },
      onBlur: {
        type: Function,
        default: () => {
        }
      },
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
