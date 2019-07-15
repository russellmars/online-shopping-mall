<template>
  <div>
    <h1>home page</h1>
    <router-link to="/mall"> to mall</router-link>
    <div @click="toMall">to mall 2</div>
  </div>
</template>

<script>
export default {
  methods: {
    toMall() {
      this.$router.push({
        path: "/mall",
        query: {
          name: 123
        }
      });
    }
  }
};
</script>
