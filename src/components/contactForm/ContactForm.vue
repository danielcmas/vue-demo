<template>
  <div>
    <label>Name: </label><input v-model="name" placeholder="name..." /><p />
    <label>Email: </label><input v-model="email" placeholder="email..." /><p />
    <label>Message: </label><textarea v-model="message" placeholder="message..." /><p />
    <button @click="goHome">Home</button>
  </div>
</template>

<script>
export default {
  name: 'RomanNumbers',
  data() {
    return {name: '', email: '', message: ''}
  },
  methods: {
    goHome: function () {
      this.$router.push({name: 'contactFormInitialPage'})
    },
  },
  
}
</script>