<template>
    <Checkbox
            label="Checkbox label"
            name="checkbox_name"
            :isChecked="true"
            error="ААААААААААААА"
    />
</template>

<script>
  import Checkbox from 'components/FormElements/Checkbox/Checkbox'

  export default {
    components: {
      Checkbox
    },
  }
</script>
