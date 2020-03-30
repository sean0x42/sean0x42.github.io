<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header'

export default Vue.extend({
  components: { Header },
})
</script>

<style lang="scss">
@import url('https://rsms.me/inter/inter.css');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

$heading-font-stack: 'Inter', sans-serif;
$font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', Arial, sans-serif;

// Improve box sizing
*,
*::before,
*::after {
  box-sizing: border-box;
}

// Use a more reasonable tab size
:root {
  -moz-tab-size: 4;
  tab-size: 4;
}

html {
  font-family: 'Inter', $font-stack;
  font-size: 16px;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', $font-stack;
  }
}

::selection {
  color: white;
  background: #6956fe;
}

body {
  font-family: inherit;
  margin: 0;
}

hr {
  height: 0;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #333;
  margin: 2.75rem 0 1.05rem;
  font-family: $heading-font-stack;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

p,
article li {
  line-height: 1.6;
}
</style>
