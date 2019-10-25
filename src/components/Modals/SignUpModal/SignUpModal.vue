<template>
  <div class="sign-up-modal">
    <div class="sign-up-modal__caption">
      {{ dictionary.caption }}
    </div>
    <ValidationObserver id="sign-in-form" ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="handleSubmit">

      <ValidationProvider :rules="{ required: true, email: true }" v-slot="{ errors }">
        <TextInput
          class="sign-up-modal__email-container"
          name="email"
          type="text"
          :placeholder="dictionary.email"
          :label="dictionary.email"
          v-model="formValues.email"
          v-bind:error="errors[0]"
        />
      </ValidationProvider>

      <DatePickerInput
        name="dateOfBirth"
        :label="dictionary.dateOfBirth"
      />

      <ValidationProvider name="password" :rules="{ required: true, password: true }" v-slot="{ errors }">
        <PasswordInput
          name="password"
          :placeholder="dictionary.password"
          :label="dictionary.password"
          v-model="formValues.password"
          v-bind:error="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider rules="required|password|confirmed:password" v-slot="{ errors }">
        <PasswordInput
          name="passwordConfirm"
          :placeholder="dictionary.passwordConfirm"
          :label="dictionary.passwordConfirm"
          v-model="formValues.passwordConfirm"
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
  import PasswordInput from 'components/FormElements/PasswordInput';
  import DatePickerInput from 'components/FormElements/DatePickerInput';
  import Button from 'components/Button';

  export default {
    name: 'ForgotPasswordModal',
    data() {
      return {
        formValues: {
          email: '',
          password: '',
          passwordConfirm: '',
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
      PasswordInput,
      DatePickerInput,
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
