<template>
  <div>
    <input v-model="num_items" placeholder="0" type="number" />
    <p v-if="num_items == 0 || !num_items">No items</p>
    <p v-if="num_items != 0">Your order has {{ num_items }} items</p>

    <p/><input name="radioSample" type="radio">Option 1<input/>
    <p/><input name="radioSample" type="radio">Option 2<input/>
    <p/><input name="radioSample" type="radio">Option 3<input/>
  </div>
</template>

<script>
export default {
  name: 'Kata1',
  data() {
    return {num_items: 0}
  },
  methods: {
    hasItems: function () {
      return this.num_items > 0
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
</style>
