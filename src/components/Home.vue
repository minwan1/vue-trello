<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="b in boards" :key=b.id>
          <pre>{{b}}</pre>
        </div>
      </div>
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
        boards: 'test',
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
          })
          .finally(()=> {
            this.loading = false
          });
      }
    }
  }
</script>

<style scoped>

</style>
