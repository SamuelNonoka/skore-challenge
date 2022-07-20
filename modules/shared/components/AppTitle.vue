<template>
  <header class="header">
    <h1 class="app-title">
      {{ text }}
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    text: { required: true, type: String }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.header {
  background: $secondary;
  display: inline-block;
  margin-top: 32px;
}

.app-title {
  color: #fff;
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
}
</style>