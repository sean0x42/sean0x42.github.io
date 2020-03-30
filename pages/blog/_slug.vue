<template>
  <Wrapper>
    <article :key="$route.params.slug" class="article">
      <header>
        <ul class="tags">
          <li v-for="tag in tags" v-bind:key="tag">{{ tag }}</li>
        </ul>

        <h1>{{ title }}</h1>
        <p class="subtitle">
          Published by <strong>{{ author }}</strong> on
          <strong>{{ publishedAt }}</strong
          >.
        </p>
      </header>

      <main v-html="body"></main>
    </article>
  </Wrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import Wrapper from '~/components/Wrapper.vue'

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
    const article = await import(`~/articles/${params.slug}.md`)
    return {
      body: article.html,
      ...article.attributes,
    }
  },

  head() {
    return {
      title: `${this.title} by ${this.author}`,
    }
  },

  computed: {
    publishedAt: function () {
      return dayjs(this.date).format('MMMM D, YYYY')
    },
  },

  components: { Wrapper },
})
</script>

<style lang="scss">
article main {
  h1 {
    margin-top: 5rem;
  }

  p {
    margin: 2rem 0;
  }
}
</style>

<style lang="scss" scoped>
article {
  color: #555;
}

header {
  margin-top: 6rem;
  margin-bottom: 2rem;
  font-size: 20px;

  h1 {
    font-family: 'Playfair Display', sans-serif;
    font-size: 3.052em;
  }
}

main {
  font-size: 20px;
  max-width: 875px; // 875px = 70ch with optimal font settings
  width: 100%;
  margin: 8rem auto;
}

code {
  font-size: 90%;
  background: #bbb;
}

.subtitle strong {
  color: #333;
  font-weight: 500;
}

.tags {
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    background: hsl(247, 35%, 96%);
    color: #6956fe;
    border-radius: 2px;
    margin-right: 0.5rem;
    font-size: 90%;
    font-weight: 450;
    line-height: 1;
    padding: 0.25em 0.5em;
  }
}
</style>
