<template>
  <div>
    mall page
    <button @click="onBack">back</button>
  </div>
</template>

<script>
export default {
  methods: {
    onBack() {
      this.$router.back();
    }
  }
};
</script>
