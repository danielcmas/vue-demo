<template>
  <div>
    <h1>User list</h1>
    <div v-for="user in usersList" :key="user.id">
       <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'UsersView',
  methods: {
  },
  mounted() {
      this.$store.dispatch('usersModule/loadUsers');
  },
  computed: {
      ...mapState('usersModule', {
          usersList: 'usersList'
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li {
  display: block
}
a {
  color: #42b983;
}
</style>
