<template>
  <div :key="$route.params.slug">
    <div v-html="content"></div>
  </div>
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
    console.log(content)
    return { content: content.html }
  },
})
</script>
