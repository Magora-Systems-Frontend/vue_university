<template>
  <div class="form-group">
    <RadioButtonSimpleField :data="data" :columnsCount="columnsCount"/>
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import RadioButtonSimpleField from 'components/Fields/RadioButtonSimpleField'

  export default {
    name: 'RadioButton',
    components: {
      RadioButtonSimpleField
    },
    props: {
      data: {
        type: Array,
        required: true,
        default: function () {
          return {
            title: '',
            value: 1,
          }
        }
      },
      columnsCount: {
        type: Number,
        default: 1,
      },
      error: { type: String, default: '' },
    },
    computed: {
      azaza() {
        return this.props;
      },
    },
  }
</script>

<style lang="scss">
</style>
