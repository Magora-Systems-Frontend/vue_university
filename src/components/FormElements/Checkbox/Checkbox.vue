<template>
  <div class="form-group">
    <div class="checkbox-component">
      <label class="checkbox-component__svg-wrapper">
        <input
                :name="name"
                :id="inputId"
                type="checkbox"
                :value="value"
                @input="$emit('input', $event.target.value)"
                @change="handleChange"
        >
        <checked v-if="isChecked"/>
        <unchecked v-else/>
      </label>
      <label class="checkbox-component__label" v-if="label" :for="inputId">{{ label }}</label>

    </div>
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import checked from './checkbox-checked.svg';
  import unchecked from './checkbox-unchecked.svg';

  export default {
    name: 'Checkbox',
    components: {
      checked,
      unchecked
    },
    props: {
      label: {type: String, default: ''},
      name: {type: String, default: ''},
      addComponentClass: {type: String, default: ''},
      error: {type: String, default: ''},
      value: {type: Boolean, default: false},
      onChange: {
        type: Function, default: () => {
        }
      },
    },
    data() {
      return {
        isChecked: this.value || '',
      }
    },
    computed: {
      inputId() {
        return `checkbox-input-${this.name}`;
      },
    },
    methods: {
      handleChange: function () {
        this.onChange(!this.isChecked);
        this.isChecked = !this.isChecked;
      }
    },
  }
</script>

<style lang="scss">
  .checkbox-component {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    &__svg-wrapper {
      margin-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__label {
      margin-left: 5px;
      margin-bottom: 0;
      display: flex;
      cursor: pointer;
      width: 95%;

      & > svg {
        position: relative;
        top: 2px;
      }
    }

    input {
      cursor: pointer;
      position: absolute;
      width: 0;
      height: 0;
    }

    &__label-wrapper {
      padding-left: 10px;
      position: relative;
      top: -1px;
    }
  }

</style>
