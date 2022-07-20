<template>
  <div class="post-item">
    <template v-if="isTypeImage">
      <div class="image-post">
        <h2>
          {{ post.title }}
        </h2>
        <div class="image">
         
        <a :href="post.url" download target="_blank">
          <img :src="post.url" class="elevation-image">
        </a>
        </div>
      </div>
    </template>
    
    <template v-else>
      <section class="content">
        <h2>
          {{ post.title }}
        </h2>

        <post-date :date="post.createdAt" />
  
        <p v-show="post.description" class="description mt-16" >
          {{ post.description }}
        </p>

        <template v-if="isTypeDocument">
          <app-link :link="post.url" text="Acessar documento" class="elevation mt-16" :external="true" />
        </template>

        <template v-else>
          <app-link :link="'/' + post.id" text="Saiba mais" class="elevation mt-16" />
        </template>
      </section>
    </template>
  </div>
</template>

<script>
import PostDto from '../models/PostDto'
import PostTypeEnum from '../enums/PostTypeEnum'

import AppLink from '../../shared/components/AppLink.vue'
import PostDate from './PostDate.vue'

export default {
  components: { AppLink, PostDate },
  props: {
    post: { required: true, type: PostDto}
  },
  computed: {
    isTypeImage () {
      return this.post.type === PostTypeEnum.IMAGE
    },
    isTypeDocument () {
      return this.post.type === PostTypeEnum.DOCUMENT
    },
    isTypeVideo () {
      return this.post.type === PostTypeEnum.VIDEO
    },
    isTypeLink () {
      return this.post.type === PostTypeEnum.LINK
    },
  }
}
</script>

<style scoped>
h2 {
  font-size: 1rem;
  margin: 0;
}

.image {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-post {
  width: 600px;
  max-width: 100%;
} 

.image-post img { margin-top: 8px; }

img { width: 100%; }

.content {
  padding:12px 16px;
  min-width: 300px;
  width: 300px;
  max-width: 50%;
}

.content:hover {
  box-shadow: 0px 0px 5px #0000003b;
  border-radius: 4px;
  transform: translateY(-5px);
  transition: .5s all;
}

.description {
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.elevation-image:hover {
  box-shadow: -2px 2px 2px transparent;
  transform: translateY(-5px);
  transform: rotate(360deg);
  transition: 2s all;
}

@media all and (max-width: 959px) {
  .image-post {
    width: 100%;
    margin: auto;
    display: block;
    margin: auto;
  }

  .content {
    width: 100%;
    max-width: 100%;
    padding: 0 8px;
  }
}
</style>
