<template>
  <nuxt />
</template>

<style lang="scss">
@import url('https://rsms.me/inter/inter.css');
@import 'node_modules/modern-normalize/modern-normalize.css';

$font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', Arial, sans-serif;

html {
  font-family: 'Inter', $font-stack;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', $font-stack;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

p,
article li {
  line-height: 1.6;
}
</style>
