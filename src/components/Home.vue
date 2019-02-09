<template>
  <div>
    Board List
    <ul>
      <li>
        <router-link to="/b/1">board 1</router-link>
      </li>
      <li>
        <router-link to="/b/2">board 2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>

</style>
