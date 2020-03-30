<template>
  <Wrapper>
    <h1>Posts</h1>
    <ul>
      <li v-for="article in articles" v-bind:key="article.title">
        <a v-bind:href="article.url" title="article.title">
          {{ article.title }}
        </a>
      </li>
    </ul>
  </Wrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import Wrapper from '~/components/Wrapper.vue'
import articles from '~/articles'

export default Vue.extend({
  asyncData() {
    /**
     * Import an article's attributes asynchronously.
     * @param slug Article slug.
     */
    async function asyncImport(slug: string) {
      const file = await import(`~/articles/${slug}.md`)
      return {
        url: `/blog/${slug}`,
        preview: file.html,
        ...file.attributes,
      }
    }

    return Promise.all(
      articles.map((article) => asyncImport(article))
    ).then((res) => ({ articles: res }))
  },

  components: { Wrapper },
})
</script>
