<template>
  <div class="login-modal">
    <div class="login-modal__caption">
      Log In
    </div>
    <form>
      <ValidationProvider rules="magic" v-slot="{ errors }">
        <input v-model="email" type="text">
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'LoginModal',
    data() {
      return {
        email: '',
      };
    },
  }
</script>

<style lang="scss">
  .login-modal {
    padding: 10px;
    &__caption {
      font-size: 25px;
      font-weight: 600;
      text-align: center;
    }
  }
</style>
