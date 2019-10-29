<template>
  <div class="radio-button-container">
    <label v-for="(item, index) of data"
           :key="index"
           class="radio-button"
           :style="{getRadioItemStyle}"
           @click="handleChange(item.value)"
    >
      <div
              :class="['radio-button__checkmark', valueForCompare === item.value ? '_checked' : '']"
      />
      <div>{{item.title}}</div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'RadioButtonSimpleField',
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
      onChange: {
        type: Function,
        default: () => {
        }
      },
      value: null,
    },
    data() {
      return {
        valueData: ''
      }
    },
    computed: {
      getRadioItemStyle: function () {
        const {columnsCount} = this;
        return {
          width: `calc((100% - ${columnsCount - 1} * 16px) / ${columnsCount})`,
        };
      },
      valueForCompare: function () {
        return this.value === false ? this.value : this.value || this.valueData;
      }
    },
    methods: {
      handleChange: function (newValue) {
        const {onChange} = this;
        this.valueData = newValue;
        onChange(newValue);
      },
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .radio-button-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .radio-button {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    user-select: none;

    &:focus {
      outline: none;
    }

    &__checkmark {
      margin-right: 5.5px;
      position: relative;
      top: 3px;
      min-width: 14px;
      max-width: 14px;
      height: 14px;
      border-radius: 50%;
      border: solid 1px $button-blue;

      &._checked:after {
        content: '';
        width: 8px;
        height: 8px;
        background: $button-blue;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        border-radius: 50%;
      }
    }
  }

</style>
