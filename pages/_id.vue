<template>
  <main class="posts-detail-page">
    <app-loading v-show="isLoadingState" />
    <div v-if="post" class="container" :class="isLoadingState ? 'loading' : ''">
      <app-title :text="post.title" />
      <section class="mt-16">
        <post-date :date="post.createdAt" />
        
        <pre v-html="post.description"></pre>

        <template v-if="post.embeddable">
          <div class="mt-16 text-center">
            <template v-if="post.type === 'video'">
              <iframe width="420" height="315" :src="post.url" frameborder="0" allowfullscreen></iframe>
            </template>
            <template v-if="post.type === 'link'">    
              <iframe :width="frameWidth" :height="frameHeight" :src="post.url" frameborder="0" @load="setFrameWidth()"></iframe>
            </template>
          </div>
        </template>
        
        <template v-if="!post.embeddable && post.url">
          <app-link :link="post.url" text="Saiba mais" class="elevation" :external="true" />
        </template>
      </section>
    </div>
  </main>
</template>

<script>
import AppLink from '../modules/shared/components/AppLink.vue'
import AppTitle from '../modules/shared/components/AppTitle.vue'
import AppLoading from '../modules/shared/components/AppLoading.vue'
import PostDate from '../modules/post/components/PostDate.vue'

import PostController from '../modules/post/controller/PostController.js'

export default {
  name: 'PostDetailPage',
  components: { AppLink, AppTitle, AppLoading, PostDate },
  data: () => ({
    isLoadingState: false,
    post: null,
    frameWidth: 0,
  }),
  mounted () {
    const postId = this.$route.params.id
    this.getPostById(postId)
  },
  computed: {
    frameHeight () {
      return window.innerHeight - window.document.body.offsetHeight
    }
  },
  methods: {
    setFrameWidth () {
      window.console.log('setFrame')
      const container = window.document.querySelector('.container')
      this.frameWidth = container ? container.offsetWidth : 0
    },
    getPostById (postId) {
      this.isLoadingState = true
      const apoloClient = this.$apollo.provider.defaultClient
      const controller = new PostController(apoloClient)
      controller.getById(postId).then((response) => {
        this.post = response;
        this.isLoadingState = false
      })
    }
  }
}
</script>

<style scoped>
pre {
  white-space: break-spaces;
  font-family: 'Roboto';
}
</style>