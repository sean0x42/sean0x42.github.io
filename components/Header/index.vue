<template>
  <header>
    <Wrapper>
      <Logo />
      <Navigation />
      <Social />
    </Wrapper>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'
import Social from './Social.vue'
import Wrapper from '../Wrapper.vue'

export default Vue.extend({
  components: { Logo, Navigation, Social, Wrapper },
})
</script>

<style lang="scss" scoped>
header {
  position: relative;
  margin-top: 4px;
  margin-bottom: 4rem;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #6956fe, rgb(86, 89, 254));
  }
}
</style>
