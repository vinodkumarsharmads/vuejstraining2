<template>
  <div id="vue-tempalte">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
      <div :class="{ 'signup-form': !showLoginForm }">
        <form v-if="showLoginForm" @submit.prevent>
          <p class="h4 text-center mb-4">Sign In</p>
          <div class="form-group">
              <label>Email address</label>
              <input v-model.trim="loginForm.email" type="email" class="form-control form-control-lg"  id="email1"/>
          </div>

          <div class="form-group">
              <label>Password</label>
              <input v-model.trim="loginForm.password" type="password" class="form-control form-control-lg" id="password1"/>
          </div>
          
          
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <p class="h4 text-center mb-4">Get Started</p>
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model.trim="signupForm.name" type="text" class="form-control form-control-lg"  id="name" />
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input v-model.trim="signupForm.title" type="text" class="form-control form-control-lg"  placeholder="Company" id="title" />
          </div>
          <div class="form-group">
            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" class="form-control form-control-lg"  placeholder="you@email.com" id="email2" />
          </div>
          <div class="form-group">
            <label for="password2">Password</label>
            <input v-model.trim="signupForm.password" type="password" class="form-control form-control-lg"  placeholder="min 6 characters" id="password2" />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'
export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })
    }
  }
}
</script>