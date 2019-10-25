<template>
  <div class="sign-up-modal">
    <div class="sign-up-modal__caption">
      {{ dictionary.caption }}
    </div>
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="handleSubmit">
      <ValidationProvider :rules="{ required: true, email: true }" v-slot="{ errors }">
        <TextInput
          class="sign-up-modal__email-container"
          name="email"
          type="text"
          :placeholder="dictionary.email"
          v-model="formValues.email"
          v-bind:error="errors[0]"
        />
      </ValidationProvider>
      <div class="sign-up-modal__button-container">
        <Button type="submit" colorStyle="colored">{{ dictionary.submitBtn }}</Button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
  import { LANGUAGE_CONSTANTS } from 'store/modules';
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
    },
    components: {
      TextInput,
      Button,
    },
  }
</script>

<style lang="scss">
  @import '../../../styles/variables';

  .sign-up-modal {
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
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
  }
</style>
