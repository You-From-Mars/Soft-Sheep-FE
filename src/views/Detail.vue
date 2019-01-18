<template>
  <div>
    <header-title :titleContent="title"></header-title>
    <div class="page-container">
      <section class="detail-article">
        <div class="article-create-date">July 17, 2017</div>
        <h4 class="article-title">MEOW</h4>
        <p class="article-content">How cute are these cushy kitties! How cute are these cushy kitties! How cute are these cushy kitties! How cute are these cushy kitties!How cute are these cushy kitties!</p>
      </section>
      <section class="article-comment">
        <h4 class="article-comment-title">Leave a Comment</h4>
        <comment-form></comment-form>
        <comment-item></comment-item>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from '../components/HeaderTitle.vue';
import CommentForm from '../components/CommentForm.vue';
import CommentItem from '../components/CommentItem.vue';

@Component({
  components: {
    HeaderTitle,
    CommentForm,
    CommentItem,
  },
})
export default class Detail extends Vue {
  public title: string = 'title';
  created() {
    this.getArticleDetail();
  }
  async getArticleDetail() {
    const articleId = this.$route.params.id;
    console.log('articleId---', articleId);
    const res = await (<any>Window).$http.get(`/softsheep/articlelist?article_detail=${articleId}`);
    console.log('res----', res);
  }
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
    color: @pink-color;
    font-weight: bolder;
  }
  .article-title {
    margin: 20px 0;
    font-size: 20px;
    color: @font-color;
    font-weight: bolder;
  }
  .article-content {
    color: @font-color;
    line-height: 25px;
  }
  .article-comment {
    .marginCenter();
    margin-top: 20px;
    &-title {
      color: @pink-color;
      margin-bottom: 20px;
    }
  }
</style>
