<template>
  <div class="login-modal">
    <div class="login-modal__caption">
      Log In
    </div>
    <form @submit.prevent="handleSubmit">
      <ValidationProvider :rules="{ required: true, email: true }" v-slot="{ errors }">
        <TextInput
          class="login-modal__email-container"
          name="email"
          type="text"
          placeholder="Email"
          v-model="formValues.email"
          v-bind:error="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider :rules="{ required: true }" v-slot="{ errors }">
        <PasswordInput
          name="password"
          placeholder="Password"
          v-model="formValues.password"
          v-bind:error="errors[0]"
        />
      </ValidationProvider>
      <div class="login-modal__button-container">
        <Button type="submit" colorStyle="colored">{{ 'Log In' }}</Button>
      </div>
    </form>
  </div>
</template>

<script>
  import TextInput from 'components/FormElements/TextInput';
  import PasswordInput from 'components/FormElements/PasswordInput';
  import Button from 'components/Button';

  export default {
    name: 'LoginModal',
    data() {
      return {
        formValues: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // eslint-disable-next-line
        console.log(this.formValues.email, this.formValues.password);
      },
    },
    components: {
      TextInput,
      PasswordInput,
      Button,
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

    &__email-container {
      margin-top: 30px;
    }

    &__button-container {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
