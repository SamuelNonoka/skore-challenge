<template>
  <div class="app-link">
    <template v-if="external">
      <a :href="link" target="_blank" class="read-more elevation">
        {{ text }}
      </a>
    </template>
    <template v-else>
      <NuxtLink :to="link" class="read-more elevation">
        {{ text }}
      </NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    text: { required: true, type: String },
    link: { required: true, type: String },
    external: { deafult: false }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.app-link { display: inline-block;  border-radius: 4px; }

.read-more {
  background: $primary;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  display: inline-block;
  padding: 8px 16px;
}
</style>