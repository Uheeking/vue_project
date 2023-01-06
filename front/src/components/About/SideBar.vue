<template>
  <div class="icon-bar">
    <router-link to="/"><i class="fa fa-home"></i></router-link>
    <router-link to="/main"
      ><i class="fas fa-regular fa-calendar"></i
    ></router-link>
    <router-link to="/about"><i class="fas fa-question"></i></router-link>
  </div>
</template>

<style>
.icon-bar {
  height: 100%;
  width: 90px;
  background-color: rgba(54, 46, 212, 0.507);
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 0;
  margin-right: 90px;
  display: inline-block;
}

.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 36px;
}

.icon-bar a:hover {
  background-color: #858585;
}

/* .active {
  background-color: #5eaf13;
} */
</style>
