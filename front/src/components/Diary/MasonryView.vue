<template>
  <ul class="list">
    <li class="item">
      <div class="card" style="height: 250px">1</div>
    </li>
    <li class="item">
      <div class="card" style="height: 120px">2</div>
    </li>
    <li class="item">
      <div class="card" style="height: 180px">3</div>
    </li>
    <li class="item">
      <div class="card" style="height: 130px">4</div>
    </li>
    <li class="item">
      <div class="card" style="height: 270px">5</div>
    </li>
    <li class="item">
      <div class="card" style="height: 320px">6</div>
    </li>
    <li class="item">
      <div class="card" style="height: 110px">7</div>
    </li>
    <li class="item">
      <div class="card" style="height: 190px">8</div>
    </li>
    <li class="item">
      <div class="card" style="height: 210px">9</div>
    </li>
    <li class="item">
      <div class="card" style="height: 80px">10</div>
    </li>
    <li class="item">
      <div class="card" style="height: 220px">11</div>
    </li>
    <li class="item">
      <div class="card" style="height: 210px">12</div>
    </li>
    <li class="item">
      <div class="card" style="height: 100px">13</div>
    </li>
    <li class="item">
      <div class="card" style="height: 160px">14</div>
    </li>
    <li class="item">
      <div class="card" style="height: 190px">15</div>
    </li>
    <li class="item">
      <div class="card" style="height: 320px">11</div>
    </li>
  </ul>
</template>
<script>
export default {}
</script>

<style scope>
/* .list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: start;
  max-height: 1000px;
  padding: 0 10px;
} */

.item {
  width: 33%;
  padding: 20px 10px 0;
  box-sizing: border-box;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}

.text {
  padding: 0 20px 20px;
  font-size: 20px;
  color: #ff3b69;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Roboto,
    'Segoe UI', Arial, sans-serif;
}

body,
ul,
li,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}
</style>
