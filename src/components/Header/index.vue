<template>
  <fragment>
    <header class="header">
      <div class="full-width header__container">
        <div class="header__logo_container">
          <a :href="ROUTES.HOME_PAGE">
            <div class="header__logo">
              <img alt="Vue logo" src="../../assets/logo.png">
            </div>
          </a>
        </div>
        <div class="header__left-side">
          <Catalog/>
          <Search/>
        </div>
        <div class="header__right-side">
          <Dropdown
                  dropdownType="emptyCart"
                  bubblePosition="left"
                  :text="text"
                  :linkText="linkText"
                  width="270px"
                  bubbleIndent="-2px"
          >
            <Wrapper
                    margin="0 2px"
                    padding="10px 0"
            >
              <Cart
              />
            </Wrapper>
          </Dropdown>
          <div class="header__right-side-divider"></div>
          <Controls/>
        </div>
      </div>
    </header>

    <header class="header-mobile">
      <div class="header-mobile__content">
        <div class="header-mobile__content-left">
          <div class="header-mobile__content-search" @click="toggleMobileNav">
            <Wrapper padding="12px">
              <Icon
                      name="mobileMenu"
                      :width="22"
                      :height="22"
              />
            </Wrapper>
          </div>
          <div class="header-mobile__content-search" @click="toggleMobileSearch">
            <Wrapper padding="12px">
              <Icon
                      name="search"
                      :width="22"
                      :height="22"
              />
            </Wrapper>
          </div>
        </div>
        <div class="header-mobile__content-logo">
          <a :href="ROUTES.HOME_PAGE">
            <div class="header__logo">
              <img alt="Vue logo" src="../../assets/logo.png">
            </div>
          </a>
        </div>
        <Dropdown
                dropdownType="emptyCart"
                :text="text"
                :linkText="linkText"
                bubblePosition="left"
                isMobile
                width="270px">
          <Cart/>
        </Dropdown>
      </div>
      <div
              v-if="showMobileSearch"
              class="header-mobile__search"
      >
        <Search maxWidth="100%"/>
      </div>
    </header>

    <MobileLeftMenu
            :show="showMobileNav"
            :toggleMenu="toggleMobileNav"
            language="RU"
    />
  </fragment>
</template>

<script>
  import {Fragment} from 'vue-fragment'
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import MobileLeftMenu from './MobileLeftMenu/MobileLeftMenu';
  import Cart from './Cart';
  import Controls from './Controls/Controls';
  import Catalog from './Catalog/Catalog';
  import Search from './Search/Search';
  import Dropdown from 'components/Dropdown';
  import Wrapper from 'components/Wrapper';
  import {ROUTES} from "config/constants";
  import Icon from 'components/Icon';


  import lang from './lang.json';

  export default {
    name: 'Header',

    components: {
      MobileLeftMenu,
      Dropdown,
      Fragment,
      Cart,
      Controls,
      Catalog,
      Search,
      Wrapper,
      Icon,
    },
    data() {
      return {
        showMobileSearch: false,
        showMobileNav: false,
      }
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      text: function () {
        return lang[this.language].cart.text
      },
      linkText: function () {
        return lang[this.language].cart.linkText
      },
      ROUTES: () => ROUTES,
    },

    methods: {
      toggleMobileSearch: function () {
        this.showMobileSearch = !this.showMobileSearch;
      },
      toggleMobileNav: function () {
        this.showMobileNav = !this.showMobileNav;
      },
    }
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .header {
    display: block;
    box-shadow: 0 4px 4px $shadow-header;
    position: relative;
    @media (max-width: 767px) {
      display: none;
    }

    &__right-side {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &-divider {
        display: block;
        margin-left: 16px;
      }
    }

    &__left-side {
      height: 100%;
      flex: 1;
      min-width: 1px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__logo-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  .header__container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }

  .header__logo {
    line-height: 100%;
    margin: 0 16px 0 0;

    &_contatiner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    img {
      max-width: 50px;
      width: 100%;
      height: auto;
    }
  }

  .header-mobile {
    box-shadow: 0 4px 4px $shadow-header;

    &__content {
      display: none;
      @media (max-width: 767px) {
        padding: 3px;
        display: flex;
        justify-content: space-between;
      }

      &-menu {
        cursor: pointer;
      }

      &-search {
        cursor: pointer;
      }

      &-logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      &-left {
        display: flex;
      }
    }

    &__search {
      padding: 5px 0 15px;
    }
  }

</style>
