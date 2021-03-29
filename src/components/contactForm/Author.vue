<template>
  <div>
    Dani Mas<p />
    <button @click="goHome">Home</button>
  </div>
</template>

<script>

export default {
  name: 'Author',
  methods: {
    goHome: function () {
      this.$router.push({name: 'contactFormInitialPage'})
    },
  },
}
</script>