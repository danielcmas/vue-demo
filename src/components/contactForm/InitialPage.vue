<template>
  <div>
    <button name="goToContactForm" @click="goToContactFormClicked">Contact form</button>
    <button name="goToAuthor" @click="goToAuthorClicked">Author</button>

    <p> GLOBAL COUNTER {{ counter }} </p>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'InitialPage',
  methods: {
    goToContactFormClicked: function () {
      this.$router.push({name: 'contactForm'})
    },
    goToAuthorClicked: function () {
      this.$router.push({name: 'author'})
    },
  },
  computed: {
      ...mapState ({
          counter: 'counter'
      })
  }
  /*
  computed: {
      counter() {
          return this.$store.state.counter;
      }
  }*/
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
