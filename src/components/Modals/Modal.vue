<template>
  <div v-if="modalDisplay">
    <div class="modal show fade" @click.self="closeModal" v-bind:style="{ display: 'block' }">
      <div class="modal-dialog">
        <div class="modal-content">
          <button @click.self="closeModal" class="modal-cross">&times;</button>
          <!--list of modals-->
          <LoginModal v-if="modalName === 'login'" />
          <ForgotPasswordModal v-else-if="modalName === 'forgot-password'" />
          <SignUpModal v-else-if="modalName === 'sign-up'" />
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
  import { MODAL_CONSTANTS } from 'store/modules';
  import LoginModal from './LoginModal/LoginModal';
  import ForgotPasswordModal from './ForgotPasswordModal/ForgotPasswordModal';
  import SignUpModal from './SignUpModal/SignUpModal';

  export default {
    name: 'Modal',
    methods: {
      closeModal() {
        this.$store.commit(MODAL_CONSTANTS.HIDE);
      },
    },
    computed: {
      modalName() {
        return this.$store.state.modalsState.modal;
      },
      modalDisplay() {
        return Boolean(this.$store.state.modalsState.modal);
      }
    },
    components: {
      LoginModal,
      ForgotPasswordModal,
      SignUpModal,
    },
  }
</script>

<style lang="scss">
  .modal {
    &-content {
      padding: 20px;
      position: relative;
    }
    &-cross {
      font-size: 30px;
      line-height: 30px;
      padding: 4px;
      position: absolute;
      right: 3px;
      top: 1px;
      cursor: pointer;
      border: none;
      background: transparent;
    }
  }
</style>
