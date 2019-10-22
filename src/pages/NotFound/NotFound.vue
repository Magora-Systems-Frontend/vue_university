<template>
  <div class="not-found-page">
    <div class="not-found-page__caption">
      {{ caption }}
    </div>
    <router-link v-bind:to="homePageUrl">
      <button class="not-found-page__button">{{ backButton }}</button>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import { ROUTES } from 'config/constants';
  import lang from './lang';

  export default {
    name: 'NotFound',
    data: function () {
      return {
        homePageUrl: ROUTES.HOME_PAGE,
      };
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      caption: function () {
        return lang[this.language].caption
      },
      backButton: function () {
        return lang[this.language].backButton
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import 'styles/_variables';

  .not-found-page {
    padding: 100px 10px;
    min-height: 300px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    &__caption {
      font-size: 40px;
      font-weight: bold;
    }

    &__button {
      color: $white;
      margin-top: 20px;
      background-color: $button-blue;
      border: 1px solid transparent;
      display: inline-block;
      margin-bottom: 0;
      font-weight: 600;
      text-align: center;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      background-image: none;
      white-space: nowrap;
      padding: 11px 30px;
      border-radius: 20px;
      font-size: 15px;
      line-height: 1.35135;
      user-select: none;
      &:hover {
        background-color: $button-blue-hover;
      }
      &:focus {
        outline: none;
      }
    }
  }

  #app {
    text-align: left;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
