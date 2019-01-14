<template>
  <div>
    <header-title :titleContent="title"></header-title>
    <div class="page-container">
      <section class="detail-article">
        <div class="article-create-date">July 17, 2017</div>
        <h4>MEOW</h4>
        <p>How cute are these cushy kitties! How cute are these cushy kitties! How cute are these cushy kitties! How cute are these cushy kitties!How cute are these cushy kitties!</p>
      </section>
      <comment-form></comment-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from '../components/HeaderTitle.vue';
import CommentForm from '../components/CommentForm.vue';

@Component({
  components: {
    HeaderTitle,
    CommentForm,
  },
})
export default class Detail extends Vue {
  public title: string = 'title';
}
</script>
<style lang="less">
  @import '../assets/css/var.less';

  .detail-article {
    text-align: left;
    .marginCenter();
    margin-top: 30px;
  }
  .article-create-date {
    font-size: 12px;
    color: #EE6FA1;
    font-weight: bolder;
  }
</style>
