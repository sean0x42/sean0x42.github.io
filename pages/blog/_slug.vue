<template>
  <article :key="$route.params.slug" class="article">
    <header>
      <h1>{{ title }}</h1>
      <p class="subtitle">
        Published by {{ author }} on {{ publishedAt }}.
      </p>

      <ul class="tags">
        <li v-for="tag in tags">{{ tag }}</li>
      </ul>
    </header>

    <div v-html="body"></div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

export default Vue.extend({
  /**
   * Ensure that only valid slugs may be used.
   */
  validate({ params }) {
    return /^[0-9a-zA-Z-]+$/.test(params.slug)
  },

  /**
   * Fetch document content.
   */
  async asyncData({ params }) {
    const { html, attributes } = await import(`~/articles/${params.slug}.md`)
    return {
      body: html,
      publishedAt: dayjs(attributes.data).format('MMMM D, YYYY'),
      ...attributes,
    }
  },
})
</script>

<style lang="scss" scoped>
article {
  color: #333;
  max-width: 70ch;
  width: 100%;
  margin: 4rem auto;
  font-size: 18px;

  header {
    margin-bottom: 2rem;
  }

  code {
    font-size: 90%;
    background: #bbb;
  }

  .tags {}
}
</style>
