<template>
  <div class="app-wrapper" id="app">
    <div class="top-container">
      <div class="home-top">
        <h4>Soft Sheep</h4>
        <div>
          <el-button>Sign In</el-button>
          <el-button>Sign Up</el-button>
        </div>
      </div>
      <header-title :titleContent="title"></header-title>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from './components/HeaderTitle.vue';

@Component({
  components: {
    HeaderTitle,
  },
})
export default class App extends Vue {
  public title: string = '首页';
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
