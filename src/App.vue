<template>
  <div id="app" class="app">
    <Header/>
    <main class="app__main">
      <router-view/>
    </main>
    <Footer/>
    <Modal />
  </div>
</template>

<script>
  import Header from 'components/Header';
  import Footer from 'components/Footer/Footer';
  import Modal from 'components/Modals/Modal';

  export default {
    name: 'app',
    components: {
      Header,
      Footer,
      Modal,
    },
  }
</script>

<style lang="scss">
  @import "./styles/global";
  @import "./styles/bootstrap";

  body {
    margin: 0;
    min-height: 100vh;
  }

  #app {
    text-align: left;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .app {
    &__main {
      flex-grow: 1;
    }
  }
</style>
