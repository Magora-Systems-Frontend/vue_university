<template>
  <div class="form-group">
    <div class="checkbox-component">
      <input
              :name="name"
              :id="inputId"
              type="checkbox"
              :value="value"
              :v-model="value || isChecked"
              @change="handleChange"
      >
      <SimpleSVG v-show="isChecked"
              :filepath="filepath"
              width="20px"
              height="20px"
      />
      <SimpleSVG v-show="!isChecked"
              :filepath="filepath2"
              width="20px"
              height="20px"
      />
      <label v-if="label" :for="inputId">{{ label }}</label>

    </div>
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import {SimpleSVG} from 'vue-simple-svg'

  export default {
    name: 'Checkbox',
    components: {
      SimpleSVG,
    },
    props: {
      label: {type: String, default: ''},
      name: {type: String, default: ''},
      addComponentClass: {type: String, default: ''},
      error: {type: String, default: ''},
      value: {type: Boolean, default: false},
      onChange: {type: Function, default: () => {}},
    },
    data() {
      return {
        isChecked: this.value || '',
      }
    },
    computed: {
      filepath: function () {
        // return this.isChecked ? require(`./checkbox-checked.svg`) : require(`./checkbox-unchecked.svg`);
        return require(`./checkbox-checked.svg`);
      },
      filepath2: function() {
        return require(`./checkbox-unchecked.svg`);

      },
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
    position: relative;

    label {
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
      width: 16px;
      height: 16px;
      opacity: 0;
      top: 2px;
    }

    &__label-wrapper {
      padding-left: 10px;
      position: relative;
      top: -1px;
    }
  }

</style>
