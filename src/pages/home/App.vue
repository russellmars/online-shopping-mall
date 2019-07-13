<template>
  <div>
    home page
    <button @click="toMall">to mall page</button>
  </div>
</template>

<script>
export default {
  methods: {
    toMall() {
      this.$router.push("/mall");
    }
  }
};
</script>
