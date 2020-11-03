<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Receipe Book</h3>
        </div>

        <ul class="list-unstyled components">
            <li>
                <router-link to="/shoppingLists">Shopping List</router-link>
            </li>
            <li>
              <router-link to="/">Receipe Book</router-link>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>