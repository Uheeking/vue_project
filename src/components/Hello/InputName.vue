<template>
  <div class="input">
    <input
      maxlength="15"
      v-model="name"
      @keyup.enter="enter()"
      placeholder="What's your name?"
      :disabled="disabled == 1"
    />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      name: '',
      disabled: 0
    }
  },
  methods: {
    enter() {
      console.log(this.name)
      if (this.name === '') {
        alert('fill in the blank!')
      } else {
        console.log('Hello ' + this.name)
        this.name = 'Hello ' + this.name + '!'
        this.disabled = 1
      }
    }
  }
}
</script>

<style scoped>
.input {
  color: white;
  font-size: 0.7rem;
  font-weight: bolder;
  position: absolute;
  left: 50%;
  top: 62%;
  margin-left: -175px;
  margin-top: -261px;
}
input {
  width: 400px;
  height: 40px;
  font-size: 2rem;
  text-align: center;
  border: none;
  background-color: transparent;
  color: white;
}
input::placeholder {
  color: white;
  font-size: 2rem;
}
.hidden {
  display: none;
}
</style>
