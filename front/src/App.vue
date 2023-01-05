<template>
  <div class="background">
    <nav :class="{ active: isActive }">
      <router-link to="/" @click="unactivate">First</router-link> |
      <router-link to="/main" @click="unactivate">Second</router-link> |
      <router-link to="/about" @click="activate"
        >Third</router-link
      >
      | <router-link to="/test">Test</router-link> |
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    activate() {
      this.isActive = true
    },
    unactivate() {
      this.isActive = false
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: white;
}
nav a:nth-child(3).router-link-exact-active {
  font-weight: bold;
  color: #2c3e50;
}
nav a:nth-child(4).router-link-exact-active {
  font-weight: bold;
  color: #2c3e50;
}
.active {
  margin-left: 90px;
  color: black;
}
</style>
