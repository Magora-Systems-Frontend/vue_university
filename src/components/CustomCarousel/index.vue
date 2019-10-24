<template>
  <!--<slick-->
          <!--:options="settings"-->
  <!--&gt;-->
    <!--<fragment v-if="typeItem === 'comments'">-->
      <!--<ItemComment v-for="(item, index) of data"-->
                   <!--:data="item"-->
                   <!--:key="index"-->
      <!--/>-->
    <!--</fragment>-->
    <!--<fragment v-else-if="typeItem === 'course'">-->
      <!--<ItemCourse v-for="(item, index) of data"-->
                  <!--:data="item"-->
                  <!--:key="index"-->
                  <!--:id="id"-->
      <!--/>-->
    <!--</fragment>-->
  <!--</slick>-->
</template>

<script>
  // import Slick from 'vue-slick';
  import {Fragment} from 'vue-fragment';
  import ItemComment from './ItemComment';
  import ItemCourse from './ItemCourse';

  export default {
    name: 'CustomCarousel',
    props: {
      data: Array,
      options: Object,
      typeItem: String,
      id: String,
    },
    components: {
      ItemComment,
      ItemCourse,
      // Slick,
      Fragment,
    },
    data() {
      return {
        settings: {
          dots: false,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 0,
          prevArrow: '<div class="carousel__arrow carousel__arrow-left"><svg viewBox="64 64 896 896" width="20px" height="20px" fill="" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path> </svg></div>',
          nextArrow: '<div class="carousel__arrow carousel__arrow-right"><svg viewBox="64 64 896 896" width="20px" height="20px" fill="" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path> </svg></div>',
          ...this.options,
        }
      }
    },
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .carousel {
    width: 100%;
  }

  .carousel__arrow {
    cursor: pointer;
    box-shadow: 0 2px 8px 2px $button-transparent-hover-background;
    background-color: $white;
    border-radius: 50%;
    border: none;
    color: $button-mobile-login-color;
    font-size: 36px;
    height: 47px;
    width: 47px;
    top: 39%;
    transform: translateY(-50%);
    transition: 300ms;
    z-index: 3;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-slider {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
  }

  .slick-track {
    align-items: stretch;
    display: flex !important;
    padding-bottom: 2px;
  }

  .slick-slide {
    margin: 0 10px;
    height: auto !important;
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-list {
    overflow: hidden;
  }

  .carousel__arrow:hover {
    box-shadow: 0 2px 8px 2px $button-transparent-hover-background;

    svg {
      fill: $arrow-hover;
    }
  }

  .carousel__arrow-left {
    left: 0;
    @media (max-width: 768px) {
      left: 0;
    }
  }

  .carousel__arrow-right {
    right: 0;
    transform: translateX(50%) translateY(-50%);
    @media (max-width: 768px) {
      right: 0;
    }
  }


</style>
