<template>
  <div class="app-wrapper" id="app">
    <div class="top-container">
      <div class="home-top">
        <h4>
          <router-link to="/home">Soft Sheep</router-link>
        </h4>
        <div class="page-header">
          <template v-if="isSignin.userName">
            <router-link to="/writer">Create Article</router-link>
            <router-link :to="`/u/${userId}`">{{isSignin.userName}}</router-link>
            <a href="javascript:;" @click="exit">exit</a>
          </template>
          <template v-else>
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
import Bus from './bus';

@Component
export default class App extends Vue {
  private isSignin: Object = '';
  private userName: string|null = '';
  private userId: string|null = '';
  private created() {
    this.getIsSignin();
    Bus.$on('isSignin', (value: Object) => {
      this.isSignin = value;
      this.userName = window.localStorage.getItem('userName');
    });
  }
  private getIsSignin() {
    this.isSignin = {
       email: window.localStorage.getItem('email'),
       userName: window.localStorage.getItem('userName'),
    };
    this.userId = window.localStorage.getItem('userId');
  }
  private async exit() {
    const res = await (<any> Window).$http.post('/softsheep/loginout');
    window.localStorage.setItem('email', '');
    window.localStorage.setItem('userName', '');
    this.isSignin = '';
    this.$router.push('/signin')
  }
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
    a {
      color: #fff;
    }
}
.page-header {
  a {
    color: #fff;
    font-weight: 500;
    margin-left: 20px;
  }
}
</style>
