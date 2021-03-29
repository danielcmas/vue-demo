<template>
  <div>
    <slot name="counterTitle" />
    <input v-model="plainNumber" @input="showAlertAndFade" placeholder="0" type="number" />
    <transition name="fade">
      <p v-if="showRomanNumber">Roman number: {{ romanNumber }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'RomanNumbers',
  data() {
    return {plainNumber: 0}
  },
  watch: {
    // whenever plainNumber changes, this function will run
    plainNumber(newValue) {
      console.log("Value changed " + newValue)
    }
  },
  computed: {
    romanNumber() {
      // Translate to roman num
      if (isNaN(this.plainNumber))
        return NaN;
        var digits = String(+this.plainNumber).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                  "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
      return Array(+digits.join("") + 1).join("M") + roman;
    },
    showRomanNumber() {
      return this.plainNumber>0
    }
  },
  methods: {
    // whenever plainNumber changes, this function will run
    showAlertAndFade() {
      alert('Value changed! ' + this.plainNumber);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
