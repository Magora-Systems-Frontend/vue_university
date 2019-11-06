<template>
  <div class="recommendations">
    <div class="recommendations__top-border"></div>
    <div class="recommendations__banner">
      <div class="recommendations__banner_icons">
        <Icon name="profile" fill="#ffffff" :width="30" :height="30" />
        <Icon name="deployment" fill="#ffffff" :width="30" :height="30" />
        <Icon name="environment" fill="#ffffff" :width="30" :height="30" />
        <Icon name="contacts" fill="#ffffff" :width="30" :height="30" />
        <Icon name="gateway" fill="#ffffff" :width="30" :height="30" />
      </div>
      <div class="recommendations__banner_text">
        <Icon name="barChart" fill="#ffffff" :width="30" :height="30" />

        <div class="recommendations__banner_text-center">
          <div class="title">{{title}}</div>
          <div class="subtitle">{{desc}}</div>
          <button class="button">{{btn}}</button>
        </div>
        <Icon name="editIcon" fill="#ffffff" :width="30" :height="30" />
      </div>
      <div class="recommendations__banner_icons">
        <Icon name="paperClip" fill="#ffffff" :width="30" :height="30" />
        <Icon name="wifi" fill="#ffffff" :width="30" :height="30" />
        <Icon name="user" fill="#ffffff" :width="30" :height="30" />
        <Icon name="shake" fill="#ffffff" :width="30" :height="30" />
        <Icon name="search" fill="#ffffff" :width="30" :height="30" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import lang from './lang';
  import Icon from 'components/Icon';

  export default {
    name: 'Recommendations',
    components: {
      Icon,
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      title: function () {
        return lang[this.language].title
      },
      desc: function () {
        return lang[this.language].desc
      },
      btn: function () {
        return lang[this.language].btn
      },
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';
  .recommendations {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: 0 4px 20px 0 rgba(32, 34, 36, 0.2);
    margin: 40px 0;
  }

  .recommendations__top-border {
    background: linear-gradient(-45deg, $button-blue 0, $button-blue-hover 100%);
    height: 8px;
  }

  .recommendations__banner {
    padding: 5px 0;
    align-items: center;
    background-color: $banner-background-color;
    color: $white;
    display: block;
  }

  .recommendations__banner_icons,
  .recommendations__banner_text {
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    svg {
      visibility: visible;
    }
    @media (max-width: 991px) {
      svg {
        visibility: hidden;
      }
    }
  }

  .recommendations__banner_text {
    padding-left: 150px;
    padding-right: 150px;
  }

  .recommendations__banner_icons .anticon,
  .recommendations__banner_text .anticon {
    font-size: 32px;
    @media (max-width: 992px) {
      display: none;
    }
  }

  .recommendations__banner_text-center {
    text-align: center;
    color: white;
  }

  .recommendations__banner_text-center .title {
    font-size: 36px;
    font-weight: 600;
    line-height: 1.33em;
    margin-bottom: 16px;
  }

  .recommendations__banner_text-center .subtitle {
    font-size: 15px;
    line-height: 1.43;
    margin-bottom: 24px;
  }

  .recommendations__banner_text-center .button {
    color: $white;
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
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover {
      background-color: $button-blue-hover;
    }
    &:focus {
      outline: none;
    }
  }

</style>
