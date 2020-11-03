<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link v-if="showLogin" to="/login">Login</router-link>
        <a v-if="showLogout" @click="logout()">logout</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapState(['userProfile']),
    showLogin() {
      return Object.keys(this.userProfile).length < 1
    },
    showLogout() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>