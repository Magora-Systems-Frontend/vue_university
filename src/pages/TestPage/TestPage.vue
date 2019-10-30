<template>
  <div style="padding: 20px">
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
  </div>
</template>

<script>
  import Checkbox from 'components/FormElements/Checkbox/Checkbox'
  import RadioButton from 'components/FormElements/RadioButton'
  import PhoneSimpleField from 'components/FormElements/PhoneInput'

  export default {
    components: {
      Checkbox,
      RadioButton,
      PhoneSimpleField
    },
  }
</script>
