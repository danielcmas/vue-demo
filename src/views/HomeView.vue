<template>
    <div>
        <h1> HOME VIEW </h1>
        <p>Browser settings</p>
        <ul>
            <li>{{ lang }}</li>
            <li>{{ width }}</li>
            <li>{{ height }}</li>
        </ul>
        <button @click="goToPage2"> Go to page 2</button>
        <UserList />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import UserList from '../components/users/UserList'

export default {
  name: 'HomeView',
  components: {
      UserList
  },
  methods: {
      goToPage2() {
          this.$router.push("/page2");
      }
  },
  mounted() {
      const payload = {
        browserLanguage : navigator.language,
        browserWidth : window.innerWidth || document.body.clientWidth,
        browserHeight : window.innerHeight || document.body.clientHeight
      } 
      
      this.$store.commit('sessionModule/setBrowserSettings', payload)
  },
  computed: {
      ...mapState('sessionModule', {
          lang: 'browserLanguage',
          width: 'browserWidth',
          height: 'browserHeight'
      })
  }
}
</script>
