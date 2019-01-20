<template>
  <div>
    <header-title :titleContent="articleDetailData.title"></header-title>
    <div class="page-container">
      <section class="detail-article">
        <div class="article-create-date">{{articleDetailData.createdTime}}</div>
        <h4 class="article-title">{{articleDetailData.title}}</h4>
        <p class="article-content">{{articleDetailData.content}}</p>
      </section>
      <section class="article-comment">
        <h4 class="article-comment-title">Leave a Comment</h4>
        <comment-form @updateComment="getCommentList"></comment-form>
        <comment-item v-if="commentList.length > 0" :commentList="commentList"></comment-item>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from '../components/HeaderTitle.vue';
import CommentForm from '../components/CommentForm.vue';
import CommentItem from '../components/CommentItem.vue';

interface commentItem {
  commentUuid: String,
  articleUuid: String,
  userName: String,
  createdTime: String,
  commentContent: String,
};

@Component({
  components: {
    HeaderTitle,
    CommentForm,
    CommentItem,
  },
})
export default class Detail extends Vue {
  private articleDetailData = {
    title: '',
    content: '',
    createdTime: '',
    pageView: 0,
  };
  private commentList: commentItem[] = [];

  private articleId: string = '';
  created() {
    this.articleId = this.$route.params.id;
    this.getArticleDetail();
    this.getCommentList();
  }
  async getArticleDetail() {
    const res = await (<any>Window).$http.get(`/softsheep/article_detail?articleId=${this.articleId}`);
    this.articleDetailData = res.data;
  }
  async getCommentList() {
    const res = await (<any>Window).$http.get(`/softsheep/commentlist?articleId=${this.articleId}`);
    this.commentList = res.data;
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
