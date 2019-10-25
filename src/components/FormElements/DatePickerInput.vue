<template>
  <div class="form-group">
<!--    <label v-if="label" :for="inputId">{{ label }}</label>-->
  </div>
</template>

<script>
  export default {
    name: 'DatePickerInput',
    props: {
      name: { type: String, required: true },
      label: { type: String, default: '' },
    },
    components: {},
  }
</script>

<style lang="scss">
</style>
