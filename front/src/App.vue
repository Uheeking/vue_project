<template>
  <div class="background">
    <nav :class="{ active: isActive }">
      <router-link to="/" @click="unactivate">First</router-link> |
      <router-link to="/main" @click="unactivate">Second</router-link> |
      <router-link to="/about" @click="activate">Third</router-link>
      | <router-link to="/study" @click="unactivate">Fourth</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      path: window.location.pathname
    }
  },
  mounted() {
    if (window.location.pathname === '/about') {
      this.isActive = true
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
  background: linear-gradient(to left, pink, rgba(54, 46, 212, 0.507));
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
  text-decoration-color: pink;
}
nav a:nth-child(4).router-link-exact-active {
  font-weight: bold;
  color: #2c3e50;
}
.active {
  margin-left: 90px;
}
</style>
