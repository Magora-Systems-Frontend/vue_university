<template>
  <ul class="dropdown__menu">
    <DropdownItem
      v-for="(item, index) in menu"
      :item="item"
      :key="index"
    />
  </ul>
</template>

<script>
  import DropdownItem from './DropdownItem';

  export default {
    name: 'Menu',
    components: {
      DropdownItem
    },
    props: {
      menu: Array,
    },
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .dropdown {
    &__menu {
      width: 270px;
      height: 100%;
      padding: 16px 0;
      list-style: none;
      &-item {
        a {
          padding: 5px 15px;
          color: $banner-background-color;
          font-size: 15px;
          font-weight: 400;
          overflow-wrap: break-word;
          text-decoration: none;
          img {
            max-width: 15px;
            margin-right: 10px;
          }
          &:hover {
            color: $button-mobile-login-color;
            text-decoration: none;
          }
        }
        &:hover {
          background: $gray-light;
        }
      }
      &-sub-level,
      &-third-level {
        width: 270px;
        position: absolute;
        padding: 22px 0;
        top: 0;
        left: 270px;
        display: block;
        list-style: none;
        height: 100%;
        background: $gray-light-2;
        box-shadow: 4px 4px 16px $button-transparent-hover-background;
        &-item {
          a {
            display: flex;
            flex-direction: row;
            align-items: center;
            color: $banner-background-color;
            font-size: 15px;
            font-weight: 400;
            width: 100%;
            position: relative;
            padding: 5px 15px;
            overflow-wrap: break-word;
            &:hover {
              color: $button-mobile-login-color;
              background-color: $gray-light;
              text-decoration: none;
            }
          }
        }
      }
      &-third-level {
        &-item {
          a {
            &:hover {
              background-color: transparent;
            }
          }
        }
      }
    }
    &__link {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .text {
        flex: 1;
      }
    }
  }

</style>
