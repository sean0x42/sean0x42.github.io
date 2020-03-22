/* eslint-disable vue/no-v-html */
<template>
  <div v-html="content"></div>
</template>

<script lang="ts">
import Vue from 'vue'

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
    const content = await import(`~/articles/${params.slug}.md`)
    return { content: content.default }
  }
})
</script>
