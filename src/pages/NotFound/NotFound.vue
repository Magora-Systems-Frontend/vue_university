<template>
  <div class="not-found-page">
    <div class="not-found-page__caption">
      {{ dictionary.caption }}
    </div>
    <router-link v-bind:to="homePageUrl">
      <Button colorStyle="colored">{{ dictionary.backButton }}</Button>
    </router-link>
  </div>
</template>

<script>
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import { ROUTES } from 'config/constants';
  import Button from 'components/Button';
  import dictionary from './lang';

  export default {
    name: 'NotFound',
    components: {
      Button,
    },
    data: function () {
      return {
        homePageUrl: ROUTES.HOME_PAGE,
      };
    },
    computed: {
      dictionary() {
        return this.$store.getters[LANGUAGE_CONSTANTS.GET_CURRENT_DICTIONARY](dictionary);
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
      margin-bottom: 30px;
    }
  }
</style>
