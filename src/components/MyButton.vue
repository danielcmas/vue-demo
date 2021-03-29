<template>
  <button @click="onButtonClicked" />
</template>

<script>
export default {
  name: 'MyButton',
  data() {
    return {num_items: 0}
  },
  methods: {
    onButtonClicked() {
      return this.$emit('customClick')
    }
  }
}
</script>
