<template>
  <component
          :is="name"
          :class="addClass"
          :width="width"
          :height="height"
          :fill="fill"
          :stroke="stroke"
  />
</template>

<script>
  import arrowLeft from './icons/arrowLeft.svg'
  import arrowRight from './icons/arrowRight.svg'
  import barChart from './icons/barChart.svg'
  import bucket from './icons/bucket.svg'
  import calculator from './icons/calculator.svg'
  import camera from './icons/camera.svg'
  import catalog from './icons/catalog.svg'
  import check from './icons/check.svg'
  import clockCircle from './icons/clockCircle.svg'
  import contacts from './icons/contacts.svg'
  import control from './icons/control.svg'
  import dashboard from './icons/dashboard.svg'
  import deployment from './icons/deployment.svg'
  import desktop from './icons/desktop.svg'
  import document from './icons/document.svg'
  import edit from './icons/edit.svg'
  import environment from './icons/environment.svg'
  import eye from './icons/eye.svg'
  import eyeClosed from './icons/eyeClosed.svg'
  import editIcon from './icons/editIcon.svg'
  import gateway from './icons/gateway.svg'
  import heart from './icons/heart.svg'
  import lock from './icons/lock.svg'
  import mobileMenu from './icons/mobileMenu.svg'
  import paperClip from './icons/paperClip.svg'
  import playCircle from './icons/playCircle.svg'
  import plus from './icons/plus.svg'
  import profile from './icons/profile.svg'
  import project from './icons/project.svg'
  import search from './icons/search.svg'
  import shake from './icons/shake.svg'
  import shoppingCart from './icons/shoppingCart.svg'
  import sound from './icons/sound.svg'
  import user from './icons/user.svg'
  import wifi from './icons/wifi.svg'

  export default {
    name: 'Icon',
    props: {
      name: {
        type: String,
        default: 'arrowLeft',
      },
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
      addClass: {
        type: String,
        default: '',
      },
    },
    components: {
      arrowLeft,
      arrowRight,
      barChart,
      bucket,
      calculator,
      camera,
      catalog,
      check,
      clockCircle,
      contacts,
      control,
      dashboard,
      deployment,
      desktop,
      document,
      edit,
      environment,
      eye,
      eyeClosed,
      editIcon,
      gateway,
      heart,
      lock,
      mobileMenu,
      paperClip,
      playCircle,
      plus,
      profile,
      project,
      search,
      shake,
      shoppingCart,
      sound,
      user,
      wifi
    },
  }

</script>

<style lang="scss">
  .simple-svg-wrapper {
    display: flex;
    align-items: center;
  }
</style>
