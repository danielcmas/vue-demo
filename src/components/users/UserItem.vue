<template>
  <div>
    <input v-model="fullName" placeholder="Type your full name here..." />
    <button name="delete" @click="onDeleteUser" class="deleteButton">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    userId: Number
  },
  data() {
    return {fullName: ''}
  },
  methods: {
    onDeleteUser: function () {
      // Trigger an event that will be received by the parent, who will remove the user
      this.$emit("userDeletedEvent", this.userId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.deleteButton {
  margin-left: 5px;
}
</style>
