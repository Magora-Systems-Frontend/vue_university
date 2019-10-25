<template>
  <div class="form-group">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <input
      :class="['form-control', error ? 'is-invalid' : '']"
      :id="inputId"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :type="type"
      :placeholder="placeholder"
    >
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      type: { type: String, default: 'text' },
      name: { type: String, required: true },
      value: { type: String, default: '' },
      label: { type: String, default: '' },
      placeholder: { type: String, default: '' },
      error: { type: String, default: '' },
    },
    computed: {
      inputId() {
        return `text-input-${this.name}`;
      },
    },
  }
</script>

<style lang="scss">
</style>
