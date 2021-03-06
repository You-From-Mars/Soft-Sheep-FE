<template>
  <div>
    <header-title :author="{name: articleDetailData.authorName, id: articleDetailData.userUuid }"></header-title>
    <div class="page-container">
      <section class="detail-article">
        <section class="article-header">
          <div>
            <div class="article-create-date">{{articleDetailData.createdTime}}</div>
            <h4 class="article-title">{{articleDetailData.title}}</h4>
          </div>
          <router-link v-if="articleDetailData.isSelf" :to="`/writer?id=${$route.params.id}`">Edit</router-link>
        </section>
        <p class="article-content" v-html="articleDetailData.content"></p>
      </section>
      <section class="star-container">
        <i v-if="isStar" @click="removeStar" class="el-icon-star-on"></i>
        <i v-else @click="star" class="el-icon-star-off"></i>
        {{articleDetailData.starCount}}
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
import { Reader } from '../assets/js/easy-markdown.min.js';
import '../assets/js/easy-markdown.min.css';
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
    isSelf: 0,
    starCount: 0,
  };
  private isStar = false;
  private commentList: commentItem[] = [];

  private articleId: string = '';
  private created() {
    this.articleId = this.$route.params.id;
    this.getIsStar();
    this.getCommentList();
  }
  private mounted () {
    this.getArticleDetail();
  }
  private async getIsStar() {
    const res = await (<any> Window).$http.get(`/softsheep/isstar?articleUuid=${this.articleId}`);
    this.isStar = res;
  }
  private async getArticleDetail() {
    const res = await (<any> Window).$http.get(`/softsheep/article_detail?articleId=${this.articleId}`);
    this.articleDetailData = res;
    const markdown = new Reader(res.content);
    this.articleDetailData.content = markdown.showHtml();
  }
  private async getCommentList() {
    const res = await (<any> Window).$http.get(`/softsheep/commentlist?articleId=${this.articleId}`);
    this.commentList = res;
  }
  private async star() {
    const res = await (<any> Window).$http.post(`/softsheep/star`, {articleUuid: this.articleId});
    if (res === 'CODE_SUCCESS') {
      this.isStar = true;
      this.articleDetailData.starCount++;
    }
  }
  private async removeStar() {
    const res = await (<any> Window).$http.post(`/softsheep/removestar`, {articleUuid: this.articleId});
    if (res === 'CODE_SUCCESS') {
      this.isStar = false;
      this.articleDetailData.starCount--;
    }
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
  .article-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      padding: 5px 15px;
      color: @pink-color;
      &:hover {
        color: lighten(@pink-color, 10%);
      }
    }
  }
  .star-container {
    line-height: 30px;
    .marginCenter();
    margin-top: 20px;
    .el-icon-star-off, .el-icon-star-on{
      cursor: pointer;
      color: @pink-color;
      font-size: 25px;
      &:hover {
        color: lighten(@pink-color, 10%);
      }
    }
  }
</style>
