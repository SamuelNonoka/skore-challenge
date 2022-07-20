<template>
  <section class="post-list">
    <article :key="post.id" v-for="post in posts" class="post-item-content">
      <post-item :post="post" />
    </article>
  </section>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  components: { PostItem },
  props: {
    posts: { required: true, type: Array }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.post-item-content {
  margin-top: 32px;
}

@media all and (max-width: 959px) {
  .post-list {
    width: 100%;
    padding: 0;
  }

  .post-item-content {
    width: 100%;
    margin: 0;
    border-bottom: 1px solid #f8f8f8;
    padding: 32px 0;
  }
}
</style>