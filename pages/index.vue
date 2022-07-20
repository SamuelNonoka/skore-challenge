<template>
  <main class="posts-page">
    <app-loading v-show="isLoadingState" />
    <div class="container" :class="isLoadingState ? 'loading' : ''">
      <app-title text="Notícias" />
      <post-list :posts="posts" />
      <div v-show="isErrorState">error</div>
    </div>
  </main>
</template>

<script>
import AppTitle from '../modules/shared/components/AppTitle.vue'
import PostList from '../modules/post/components/PostList.vue'
import AppLoading from '../modules/shared/components/AppLoading.vue'

import PostController from '../modules/post/controller/PostController.js'
import PostListStateEnum from '../modules/post/enums/PostListStateEnum.js'

export default {
  name: 'IndexPage',
  components: { AppTitle, PostList, AppLoading },
  data: () => ({
    posts: [],
    state: null,
  }),
  computed: {
    isLoadingState () {
      return this.state === PostListStateEnum.LOADING
    },
    isErrorState () {
      return this.state === PostListStateEnum.ERROR
    },
    isSuccessState () {
      return this.state === PostListStateEnum.SUCCESS
    }
  },
  mounted () {
    this.state = PostListStateEnum.LOADING
    this.getPosts()
  },
  methods: {
    getPosts() {
      const apoloClient = this.$apollo.provider.defaultClient
      const controller = new PostController(apoloClient)
      controller.getAll().then((response) => {
        this.posts = response;
        this.state = PostListStateEnum.SUCCESS
      })
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  align-items: unset;
}

.posts-content {
  margin-top: 32px;
  display: flex;
}
</style>
