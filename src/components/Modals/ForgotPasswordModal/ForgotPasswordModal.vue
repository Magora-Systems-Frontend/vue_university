<template>
  <div class="login-modal">
    <div class="login-modal__caption">
      {{ dictionary.caption }}
    </div>
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="handleSubmit">
      <ValidationProvider :rules="{ required: true, email: true }" v-slot="{ errors }">
        <TextInput
          class="login-modal__email-container"
          name="email"
          type="text"
          :placeholder="dictionary.email"
          v-model="formValues.email"
          v-bind:error="errors[0]"
        />
      </ValidationProvider>
      <div class="login-modal__forgot-container">
        <span @click="onLoginClick" class="login-modal__forgot-link">{{ dictionary.login }}</span>
      </div>
      <div class="login-modal__button-container">
        <Button type="submit" colorStyle="colored">{{ dictionary.submitBtn }}</Button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
  import { LANGUAGE_CONSTANTS, MODAL_CONSTANTS } from 'store/modules';
  import dictionary from './lang';
  import TextInput from 'components/FormElements/TextInput';
  import Button from 'components/Button';

  export default {
    name: 'ForgotPasswordModal',
    data() {
      return {
        formValues: {
          email: '',
        },
      };
    },
    computed: {
      dictionary() {
        return this.$store.getters[LANGUAGE_CONSTANTS.GET_CURRENT_DICTIONARY](dictionary);
      },
    },
    methods: {
      async handleSubmit() {
        const isValid = await this.$refs.observer.validate();
        if (!isValid) return;
        // eslint-disable-next-line
        console.log(this.formValues.email);
      },
      onLoginClick() {
        this.$store.commit(MODAL_CONSTANTS.SHOW, 'login');
      },
    },
    components: {
      TextInput,
      Button,
    },
  }
</script>

<style lang="scss">
  @import '../../../styles/variables';

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

    &__forgot-container {
      display: flex;
      justify-content: flex-end;
    }

    &__forgot-link {
      font-size: 14px;
      cursor: pointer;
      color: $button-blue;
      margin-top: -8px;
    }

    &__button-container {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
