<template>
<div class="background">
  <nav>
    <router-link to="/">First</router-link> |
    <router-link to="/main">Second</router-link> |
    <router-link to="/about">Third</router-link> |
    <router-link to="/test">Test</router-link> |
  </nav>
  <router-view/>
  </div>
</template>

<style>
body{
  margin:0;
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
  color: #42b983;
}
</style>
