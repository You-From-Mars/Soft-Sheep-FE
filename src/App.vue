<template>
  <div class="app-wrapper" id="app">
    <div class="top-container">
      <div class="home-top">
        <h4>Soft Sheep</h4>
        <div class="page-header">
          <template>
            <router-link to="/signin">Sign In</router-link>
            <router-link to="/signup">Sign Up</router-link>
          </template>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.home-top {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 900px;
    height: 100%;
    line-height: 57px;
    margin: 0 auto;
    color: #fff;
}
.page-header {
  a {
    color: #fff;
    font-weight: 500;
    margin-left: 20px;
  }
}
</style>
