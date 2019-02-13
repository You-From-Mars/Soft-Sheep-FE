<template>
    <div class="header-title">
        <router-link :to="`/u/${author.id}`">{{author.name}}</router-link>
        <div class="bg"></div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
interface Author {
    name: String,
    id: String,
}

@Component({
  name: 'HeaderTitle',
})
export default class HeaderTitle extends Vue {
  @Prop() private author!: {
      type: Author,
      default: {
          name: '',
          id: '',
      },
  };
}
</script>
<style lang="less">
    .header-title {
        text-align: left;
        > a {
            display: block;
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