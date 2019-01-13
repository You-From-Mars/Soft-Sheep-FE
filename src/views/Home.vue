<template>
  <div class="page-container" id="page_home">
    <div class="top-container home-top">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Home extends Vue {
}
</script>
<style lang="less">
    .home-top {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .top-container .setting-button {
        width: 103px;
        height: 26px;
        line-height: 26px;
        padding: 0;
        margin-right: 20px;
    }
</style>
