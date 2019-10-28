<template>
  <div class="form-group">
    <label v-if="label" :for="inputId">{{ label }}</label>
  </div>
</template>

<script>

  export default {
    name: 'DatePickerInput',
    components: {},
    props: {
      name: { type: String, required: true },
      value: { type: String, default: '' },
      label: { type: String, default: '' },
    },
    data() {
      return {
        date: new Date(),
        dayStr: ['7', '1', '2', '3', '4', '5', '6'],
      };
    },
    methods: {
      onInput(val) {
        this.date = val;
        // eslint-disable-next-line
        console.log(val);
      },
    },
  }
</script>

<style lang="scss">
</style>
