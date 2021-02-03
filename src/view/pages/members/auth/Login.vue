<template>
  <b-card class="login-body mb-5">
    <h3 class="text-center mt-4 mb-4">Logga in</h3>
    <form class="login-form" v-if="showForm">
      <b-alert
        :show="showWarning"
        variant="danger"
        dismissible
        @dismissed="showWarning = false"
        fade
        >Fel e-post eller lösenord.</b-alert
      >
      <b-form-input type="email" v-model="form.email" class="mb-8" placeholder="E-post" />
      <b-form-input type="password" v-model="form.password" class="mb-10" placeholder="Lösenord" />
      <div class="d-flex align-items-center justify-content-between mb-8">
        <router-link to="/forget" tag="a" class="line-link blue-link"
          >Glömt lösenord?</router-link
        >
        <b-button class="btn-login" variant="primary" @click="onSubmit">Logga In</b-button>
      </div>
    </form>
    <div class="warning-message" v-else>
      <b-alert variant="danger" fade show>
        <div class="d-flex align-items-center justify-content-center p-4">
          <div>
            <fa-icon :icon="['far', 'question-circle']" size="3x"></fa-icon>
          </div>
          <div class="ml-4">
            Felaktig inloggningslänk. Kontakta din förening för att begära en korrekt länk.
          </div>
        </div>
      </b-alert>
    </div>
  </b-card>
</template>

<style lang="scss" scoped>
.login-body {
  max-width: 500px;
  width: 100%;
  .login-form {
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
  .warning-message {
    padding: 30px 20px;
  }
}
</style>

<script>
import { mapState } from 'vuex';
import { LOGIN, LOGOUT } from '@/core/services/store/auth.module';
import axios from 'axios';

import { validationMixin } from 'vuelidate';
import { email, minLength, required } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  name: 'login',
  data() {
    return {
      // Remove this dummy login info
      form: {
        email: '',
        password: ''
      },
      showWarning: false,
      showForm: false
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  mounted() {
    if (this.$route.query.company_id) {
      this.showForm = true;
    } else {
      this.showForm = false;
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null
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

      const email = this.$v.form.email.$model;
      const password = this.$v.form.password.$model;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // show loading
      const res = await axios.post('/login', { email, password });
      if (res.status === 200) {
        // success
        this.$store.dispatch(LOGIN, { email, password }).then(() => {
          this.$router.push({ name: 'ml-dashboard' });
        });
      } else if (res.status === 401) {
        // un authorized
        this.$func.showTextMessage('Unauthorized', 'Please check your credentials', 'info');
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
