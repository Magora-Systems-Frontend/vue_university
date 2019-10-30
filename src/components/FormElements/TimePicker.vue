<template>
  <div class="form-group">
    <label class="timepicker-label" v-if="label">{{ label }}</label>
    <component
      :is="timepicker"
      input-class="form-control"
      v-model="timeValue"
      @change="$emit('change', timeValue)"
    />
    <div v-if="error" class="invalid-feedback">
      {{ error }}
    </div>
  </div>
</template>

<script>

  export default {
    components: {
      VueTimepicker: () => import('vue2-timepicker')
    },
    props: {
      label: {
        type: String,
        default: 'Time'
      },
      error: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        timepicker: '',
        timeValue: ''
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.timepicker = 'VueTimepicker'
      })
    }
  }
</script>

<style lang="scss">
  @import '~vue2-timepicker/dist/VueTimepicker.css';
  .timepicker-label {
    display: block;
  }

  .vue__time-picker{
    .form-control:disabled, .form-control[readonly] {
      background-color: transparent;
    }
    .dropdown {
      ul {
        overflow-y: hidden;
        &:hover {
          overflow-y: auto;
        }
        li {
          padding-left: 10px;
          text-align: left;
        }
      }
    }}
</style>
