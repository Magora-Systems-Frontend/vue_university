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
          :error="errors[0]"
        />
      </ValidationProvider>

      <DatePickerInput
        name="dateOfBirth"
        :label="dictionary.dateOfBirth"
        :cityValue="formValues.dateOfBirth"
      />

      <ValidationProvider v-slot="{ errors }">
        <PhoneInput
                class=""
                name="phone"
                label="Phone"
                :error="errors[0]"
        />
      </ValidationProvider>

      <FormSelector
        name="city"
        :className="'select-base form-control form-select'"
        :label="dictionary.city"
        :options="[{label: 'Los Angeles', value: 'LA'}, {label: 'New York City', value: 'NY'}, {label: 'Novosibirsk', value: 'Nsk'}]"
        :elementPlaceholder="'City'"
        @setCity="setCity"
      />

      <FormSelector
        name="hobby"
        :className="'select-base form-control form-select multiple-select'"
        :label="dictionary.hobbies"
        :options="['Painting', 'Singing', 'Dancing', 'Embroidery' ]"
        :elementPlaceholder="'Hobbies'"
        @setHobbies="setHobbies"
        :clearableSelect="true"
        :isMultiple="true"
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
  import FormSelector from 'components/FormElements/FormSelector';
  import PhoneInput from 'components/FormElements/PhoneInput';

  export default {
    name: 'ForgotPasswordModal',
    data() {
      return {
        formValues: {
          email: '',
          city: '',
          hobbies: '',
          password: '',
          passwordConfirm: '',
          dateOfBirth: '',
        },
      };
    },
    computed: {
      dictionary() {
        return this.$store.getters[LANGUAGE_CONSTANTS.GET_CURRENT_DICTIONARY](dictionary);
      },
    },
    methods: {
      setCity(values) {
        this.formValues.city = values.label;
      },
      setHobbies(values) {
        (values !== null) && (this.formValues.hobbies = values);
      },
      async handleSubmit() {
        const isValid = await this.$refs.observer.validate();
        if (!isValid) return;
      },
    },
    components: {
      TextInput,
      PasswordInput,
      DatePickerInput,
      Button,
      FormSelector,
      PhoneInput,
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
