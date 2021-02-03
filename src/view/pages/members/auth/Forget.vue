<template>
  <b-card class="forget-body mb-5">
    <h3 class="text-center mt-4 mb-4">Glömt lösenordet?</h3>
    <div class="text-center">Ingen fara. Ange din e-postadress</div>
    <div class="text-center">så skickar vi en återställningslänk.</div>
    <form class="forget-form">
      <b-alert
        :show="showWarning"
        variant="danger"
        dismissible
        @dismissed="showWarning = false"
        fade
        >Fel e-post eller lösenord.</b-alert
      >
      <b-form-input type="email" v-model="form.email" class="mb-12 mt-4" placeholder="E-post" />
      <div class="d-flex align-items-center justify-content-between mb-12 mt-12">
        <router-link to="/login" tag="a" class="line-link blue-link"
          >Tillbaka till inloggningen
        </router-link>
        <b-button class="btn-login" variant="primary" @click="onSubmit"
          >Återställ lösenord</b-button
        >
      </div>
    </form>
  </b-card>
</template>

<style lang="scss" scoped>
.forget-body {
  max-width: 500px;
  width: 100%;
  .forget-form {
    padding: 2rem 1.5rem 2rem 1.5rem;
    .btn-login {
      font-size: 1.2rem;
      font-weight: 500;
      padding: 1rem 3rem;
      background-color: #5d78ff;
      border-color: #5d78ff;
      &:hover {
        background-color: #3758ff;
        border-color: #2a4eff;
      }
    }
  }
}
</style>

<script>
import { mapState } from 'vuex';

import { validationMixin } from 'vuelidate';
import { email, required } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  name: 'forget',
  data() {
    return {
      // Remove this dummy login info
      form: {
        email: '',
      },
      showWarning: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    async onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        this.showWarning = true;
        return;
      }
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
