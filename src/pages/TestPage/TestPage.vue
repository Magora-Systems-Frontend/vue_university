<template>
  <div style="padding: 20px">
    <Autocomplete
    />
    <Checkbox
            label="Checkbox label"
            name="checkbox_name"
            :isChecked="true"
            error="ААААААААААААА"
    />
    <RadioButton
            :data="[{ title: 'One', value: 1 }, { title: 'Two', value: 2 }]"
            :columnsCount="1"
            error="AAAAA"
    />
    <PhoneSimpleField/>
    <TimePicker/>
    <FileUpload/>
    <ImageUpload
      name="images"
    />
  </div>
</template>

<script>
  import Checkbox from 'components/FormElements/Checkbox/Checkbox';
  import RadioButton from 'components/FormElements/RadioButton';
  import PhoneSimpleField from 'components/FormElements/PhoneInput';
  import TimePicker from 'components/FormElements/TimePicker';
  import Autocomplete from 'components/FormElements/Autocomplete';
  import FileUpload from 'components/FormElements/FileUpload';
  import ImageUpload from 'components/FormElements/ImageUpload';

  export default {
    components: {
      Checkbox,
      RadioButton,
      PhoneSimpleField,
      TimePicker,
      Autocomplete,
      FileUpload,
      ImageUpload
    },
    data() {
      return {
      }
    },
  }
</script>
