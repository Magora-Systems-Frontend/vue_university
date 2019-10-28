<template>
  <SimpleSVG
          :filepath="filepath"
          :fill="fill"
          :stroke="stroke"
          :width="`${width}px`"
          :height="`${height || width}px`"
          :id="id"
  />
</template>

<script>
  import {SimpleSVG} from 'vue-simple-svg'

  export default {
    name: 'Icon',
    props: {
      name: String,
      width: {
        type: Number,
        default: 20
      },
      height: {
        type: Number,
      },
      fill: {
        type: String,
        default: '',
      },
      stroke: {
        type: String,
        default: '#000000'
      },
      id: {
        type: String,
        default: ''
      },
    },
    components: {
      SimpleSVG,
    },
    computed: {
      filepath: function () {
        return require(`components/icons/${this.name}.svg`)
      },
    }
  }

</script>

<style lang="scss">
  .simple-svg-wrapper {
    display: flex;
    align-items: center;
  }
</style>
