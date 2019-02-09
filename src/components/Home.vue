<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">
          {{ b }}
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/b/1">board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import {board} from '../api'

  export default {
    name: "Home",
    data() {
      return {
        loading: false,
        apiRes: 'test',
        error: ''
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        board.fetch()
          .then(data => {
            this.boards = data;
          });
      }
    }
  }
</script>

<style scoped>

</style>
