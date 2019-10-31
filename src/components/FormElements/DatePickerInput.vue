<template>
  <div class="form-group">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <ClientOnly>
      <Datepicker
        v-model="date"
      />
    </ClientOnly>
  </div>
</template>

<script>
  import ClientOnly from 'vue-client-only'
  const Datepicker = () => import('vuejs-datepicker');

  export default {
    name: 'DatePickerInput',
    components: {
      Datepicker,
      ClientOnly,
    },
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
    computed: {
      inputId() {
        return '123';
      },
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
