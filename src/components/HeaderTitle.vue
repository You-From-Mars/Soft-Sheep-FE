<template>
    <div class="header-title">
        <h4>{{titleContent}}</h4>
        <div class="bg"></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'HeaderTitle',
})
export default class HeaderTitle extends Vue {
  @Prop() private titleContent!: string;
}
</script>
<style lang="less">
    .header-title {
        text-align: left;
        > h4 {
            width: 900px;
            margin: 0 auto;
            line-height: 30px;
            color: #666;
        }
        > .bg {
            height: 48px;
            background: url('../assets/images/header_bg.jpg');
            background-size: 38px 48px;
        }
    }
</style>