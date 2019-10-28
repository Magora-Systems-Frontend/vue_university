<template>
  <div class="header-controls">
    <Wrapper
            margin="0 2px"
            padding="10px 0"
    >
      <Button
        :onClick="showLoginModal"
        colorStyle="bordered"
      >
        {{loginTitle}}
      </Button>
    </Wrapper>
    <Wrapper
            margin="0 2px"
            padding="10px 0"
    >
      <Button
        :onClick="showSignUpModal"
        colorStyle="colored"
      >
        {{signTitle}}
      </Button>
    </Wrapper>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS, MODAL_CONSTANTS } from 'store/modules';
  import Button from 'components/Button'
  import Wrapper from 'components/Wrapper';
  import lang from './lang'

  export default {
    name: 'Cart',
    components: {
      Button,
      Wrapper,
    },
    methods: {
      showLoginModal() {
        this.$store.commit(MODAL_CONSTANTS.SHOW, 'login');
      },
      showSignUpModal() {
        this.$store.commit(MODAL_CONSTANTS.SHOW, 'sign-up');
      },
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      loginTitle: function () {
        return lang[this.language].loginTitle;
      },
      signTitle: function () {
        return lang[this.language].signTitle;
      }
    }
  }
</script>

<style lang="scss">
  .header-controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
