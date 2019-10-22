<template>
  <div class="shopping-list">
    <div class="shopping-list__icon">
      <Icon
        name="shoppingCart"
        :width="20"
        :height="20"
      />
    </div>
  </div>
</template>

<script>
  import Icon from 'components/Icon';

  export default {
    name: 'Cart',
    components: {
      Icon,
    },
  }
</script>

<style lang="scss">
  @import '../../styles/variables';

  .shopping-list {
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      cursor: pointer;
      border: 1px solid transparent;

      &:hover {
        border-radius: 50%;
        border-color: $button-transparent-hover-background;
        background-color: $button-transparent-hover-background;
      }
    }
  }

</style>
