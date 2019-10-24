<template>
  <div v-if="modalDisplay">
    <div class="modal show fade" @click.self="closeModal" v-bind:style="{ display: 'block' }">
      <div class="modal-dialog">
        <div class="modal-content">
          Modal example
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
  import { MODAL_CONSTANTS } from 'store/modules';

  export default {
    name: 'Modal',
    methods: {
      closeModal() {
        this.$store.commit(MODAL_CONSTANTS.HIDE);
      },
    },
    computed: {
      modalDisplay() {
        return Boolean(this.$store.state.modalsState.modal);
      }
    },
  }
</script>

<style lang="scss">
</style>
