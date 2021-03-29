<template>
  <div>
    <h1>User list</h1>
    <ul>
      <li v-for="userId in userIds" :key="userId">
        <p><UserItem v-bind:id="userId" @userDeletedEvent="onUserDeleted" /></p>
      </li>
    </ul>
    <button name="addUser" @click="addUser">Add user</button>
  </div>
</template>

<script>

import UserItem from './UserItem'

export default {
  name: 'UserList',
  data() {
    return {
      userIds: [],
      userCounter: 0
    }
  },
  methods: {
    addUser: function () {
      this.userIds.push(this.userCounter++)
    },
    onUserDeleted: function(id) {
      const indexOf = this.userIds.indexOf(id);
      this.userIds.splice(indexOf, 1);
    }
  },
  components: {
    UserItem
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
