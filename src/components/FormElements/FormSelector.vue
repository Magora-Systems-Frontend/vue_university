<template>
    <div class="form-group">
        <label v-if="label" :for="inputId">{{ label }}</label>
        <Select
            :id="inputId"
            :options="options"
            :className="className"
            :elementPlaceholder="elementPlaceholder"
            :onInput="setData"
            :clearableSelect="clearableSelect"
            :isMultiple="isMultiple"
        />
    </div>
</template>

<script>
    import Select from 'components/Fields/Select';

    export default {
      name: 'FormSelector',
      data() {
      	return {}
      },
      props: {
        name: { type: String, required: true },
        options: { type: Array, required: true },
        label: { type: String, default: '' },
        elementPlaceholder: { type: String },
        clearableSelect: { type: Boolean },
        isMultiple: { type: Boolean },
        className: { type: String }
      },
      components: {
        Select,
      },
      computed: {
        inputId() {
          return `password-input-${this.name}`;
        },
      },
      methods: {
        setData(value) {
          (this.name === "city") && this.$emit('setCity', value);
          (this.name === "hobby") && this.$emit('setHobbies', value);
        },
      }
    }
</script>
