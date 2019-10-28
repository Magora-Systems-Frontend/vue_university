<template>
  <div class="course-item">
    <v-popover
            trigger="click"
            position="auto"
    >
      <Item :data="data"/>
      <Popover
              :data="data"
              :objective="data.objective"
              :titles="titles"
              slot="popover"
      />
    </v-popover>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import {VPopover} from 'v-tooltip';
  import Item from './Item';
  import Popover from './Popover';
  import lang from './lang';

  export default {
    name: 'ItemCourse',
    props: {
      data: {
        type: Object,
        default: () => {
        },
      },
    },
    components: {
      VPopover,
      Item,
      Popover,
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      titles: function () {
        return lang[this.language];
      }
    }
  }
</script>

<style lang="scss">
  .course-item {
    position: relative;
  }

  .popup-content {
    width: 320px !important;
    max-width: 320px !important;
    border: none !important;
    padding: 0 !important;
  }

  .v-popover {
    display: flex;
    justify-content: center;
  }

</style>
