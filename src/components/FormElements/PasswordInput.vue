<template>
  <div class="form-group password-input">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <div class="password-input__input-container">
      <input
        :class="['form-control', error ? 'is-invalid' : '']"
        :id="inputId"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
      >
      <span @click="onEyeClick" class="password-input__eye">
       <Icon :name="type === 'text' ? 'eye' : 'eyeClosed'" stroke="" :width="20"/>
      </span>
    </div>
    <div v-if="error" class="invalid-feedback" :style="{ display: 'block' }">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import Icon from 'components/Icon'

  export default {
    name: 'PasswordInput',
    data() {
      return {
        type: 'password',
      };
    },
    props: {
      name: { type: String, required: true },
      value: { type: String, default: '' },
      label: { type: String, default: '' },
      placeholder: { type: String, default: '' },
      error: { type: String, default: '' },
    },
    computed: {
      inputId() {
        return `password-input-${this.name}`;
      },
    },
    methods: {
      onEyeClick() {
        this.type = this.type === 'text' ? 'password' : 'text';
      },
    },
    components: {
      Icon,
    },
  }
</script>

<style lang="scss">
  @import '../../styles/variables';

  .password-input {
    &__input-container {
      position: relative;
    }
    &__eye {
      position: absolute;
      right: 8px;
      top: calc(50% - 10px);
      fill: $gray-dark;
      cursor: pointer;
    }
  }
</style>
