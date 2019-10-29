<template>
  <fragment>
    <footer class="footer_main">
      <div class="row content_container">
        <div class="hidden-xs col-sm-9">
          <ul class="links">
            <li
                    v-for="item of links"
                    :key="item.id"
                    class="links__item">
              <a :href="null">
                {{item.title}}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-3 language-select_wrapper">
          <Select
            :className="'select-base lang-select'"
            :options="[{label: 'Русский', value: 'RU'}, {label: 'English',value: 'EN'}]"
            :defaultInputValue="{label: 'English',value: 'EN'}"
            :onInput="setLanguage"
            :clearableSelect="false"
          />
        </div>
      </div>
    </footer>
    <hr class="language-divider"/>
    <footer class="footer_bottom content_container">
      <div class="row footer__copyright">
        <div class="col-sm-6 footer__copyright-left">
          <div class="footer__copyright-logo">
            <img src="../../assets/logo.png" alt=""/>
          </div>
          <div class="footer__copyright-text">Copyright © 2019</div>
        </div>
        <div class="col-sm-6 footer__copyright-right">
          <ul class="footer__copyright-laws">
            <li
                    v-for="item of laws"
                    :key="item.id"
            >
              <a :href="null">
                {{item.title}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <hr class="footer-divider"/>
  </fragment>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import {LANGUAGE_CONSTANTS} from 'store/modules';
  import lang from './lang';
  import Select from 'components/Fields/Select';
  import {Fragment} from 'vue-fragment';

  export default {
    name: 'Footer',
    components: {
      Select,
      Fragment,
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      links: function () {
        return lang[this.language].links;
      },
      laws: function () {
        return lang[this.language].laws;
      },
    },
    methods: {
      ...mapMutations([
        LANGUAGE_CONSTANTS.SET_LANGUAGE,
      ]),
      setLanguage(ln) {
        this[LANGUAGE_CONSTANTS.SET_LANGUAGE](ln);
      },
    }
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .footer {
    &_main {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      padding: 30px 20px 0;
      background-color: $gray-light-2;
      color: $gray-medium;
      font-size: 13px;
      line-height: 18px;
      width: 100%;

      .links {
        text-align: left;
        height: 90px;
        padding-left: 0;
        margin-bottom: 10px;
        list-style: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        &__item {
          flex: 33.3%;
          width: 33.3%;

          &:nth-child(n + 4) {
            width: 22.2%;
          }

          a {
            color: $button-mobile-login-color;

            &:hover {
              color: $button-mobile-login-hover-color;
              text-decoration: none;
            }
          }
        }
      }
    }

    &_bottom {
      margin: 0 auto;
      padding: 0 20px;
      background-color: $white;
      color: $gray-medium;
      font-size: 13px;
      line-height: 18px;
      width: 100%;
    }

    &__language-list {
      margin-top: 30px;
      margin-bottom: 30px;
      padding-left: 0;
      list-style: none;
      color: $gray-medium;

      & > li {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;

        a {
          color: $button-mobile-login-color;
          background-color: transparent;
          font-weight: 400;
          text-decoration: none;

          &:hover {
            color: $button-mobile-login-hover-color;
          }
        }
      }
    }

    &__copyright {
      margin: 30px auto;

      &-text {
        margin-left: 20px;
      }

      &-left {
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        align-content: flex-start;
      }

      &-logo {
        img {
          width: 50px;
          height: auto;
        }
      }

      &-right {
        text-align: right;
      }

      &-laws {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-bottom: 0;
        padding-left: 0;

        & > li {
          display: inline-block;
          padding: 6px;

          a {
            color: $button-mobile-login-color;
            background-color: transparent;
            font-weight: 400;
            text-decoration: none;

            &:hover {
              color: $button-mobile-login-hover-color;
            }
          }
        }
      }
    }
  }

  .language-select_wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  }

  .language-divider {
    margin: 0;
    height: 1px;
    width: 100%;
    background-color: #e8e9eb;
    border: 0;
  }

  .footer-divider {
    margin: 0;
    height: 1px;
    width: 100%;
    background-color: $button-blue;
  }

</style>
