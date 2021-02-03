<template>
  <b-card class="login-body mb-5">
    <h3 class="text-center mt-4 mb-4">Logga in</h3>
    <form class="login-form" v-on:submit.prevent="onSubmit">
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
        <router-link to="/ml-forget" tag="a" class="line-link blue-link"
          >Glömt lösenord?</router-link
        >
        <b-button class="btn-login" variant="primary" type="submit">Logga In</b-button>
      </div>
    </form>
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
}
</style>

<script>
import { mapState } from 'vuex';
import { LOGIN } from '@/core/services/store/auth.module';
import { SET_COMPANY } from '@/core/services/store/common.module';
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
      showWarning: false
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

      // show loading
      const loader = this.$loading.show();
      const res = await axios.post('/user/login', { email, password });
      if (res.status === 200) {
        // success
        this.$store.dispatch(SET_COMPANY, res.data.current_company_id);

        this.$store.dispatch(LOGIN, {
          user: {
            user_id: res.data.id,
            email: email
          },
          token: res.data.token
        });
        this.$router.push({ name: 'ml-dashboard' });
      } else if (res.status === 401) {
        // un authorized
        // this.$func.showTextMessage('Unauthorized', 'Please check your credentials', 'info');
        this.showWarning = true;
      }
      loader & loader.hide();
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
