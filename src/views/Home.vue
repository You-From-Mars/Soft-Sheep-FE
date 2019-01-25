<template>
  <div>
    <header-title :titleContent="title"></header-title>
    <div class="page-container" id="page_home">
      <ul class="article-list">
        <li v-for="(item, index) in articleList" :key="index">
          <img :src="item.img" />
          <article>
            <h4>{{item.title}}</h4>
            <p>{{item.overviewContent}}</p>
            <el-button @click="toDetail(item.articleUuid)" type="primary">More</el-button>
          </article>
        </li>
      </ul>
      <div v-if="loadingShow" class="loading-container">
        <i class="el-icon-loading"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from '../components/HeaderTitle.vue';

// 控制滚动条滑动到底部时不要一直加载
let pageHandler: Boolean = true;

@Component({
  components: {
    HeaderTitle,
  },
})
export default class Home extends Vue {
  public title: string = 'Home';
  private articleList: any = [];
  private pageNum: number = 1;
  private pageSize: number = 10;
  private totalPage: number = 1;
  private loadingShow: Boolean = false;

  private created() {
    this.getArticles();
  }
  private mounted () {
    window.addEventListener('scroll', this.handleScroll);
  }
  private async handleScroll() {
    if(this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight()){
        if (pageHandler && this.pageNum < this.totalPage) {
          this.pageNum++;
          await this.getArticles();
        }
    }
  }
  private getScrollTop(): number {
    let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
　　　　bodyScrollTop = document.body.scrollTop;
　　 }
    if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　 }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }
  private getScrollHeight(): number {
    let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  　　if (document.body) {
  　　　　bodyScrollHeight = document.body.scrollHeight;
  　　}
  　　if (document.documentElement) {
  　　　　documentScrollHeight = document.documentElement.scrollHeight;
  　　}
  　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  　　return scrollHeight;
  }
  private getWindowHeight(): number{
    let windowHeight: number = 0;
　　if(document.compatMode === 'CSS1Compat'){
　　　　windowHeight = document.documentElement.clientHeight;
　　} else {
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
  }
  private async getArticles() {
    pageHandler = false;
    this.loadingShow = true;
    const res = await (<any> Window).$http.get(`/softsheep/articlelist?pageNum=${this.pageNum}&pageSize=${this.pageSize}`);
    console.log('data---', res);
    this.totalPage = res.data.totalPage;
    this.loadingShow = false;
    this.articleList.push(...res.data.overviews);
    setTimeout(() => {
      pageHandler = true;
    }, 1000);
  }
  private toDetail(id: number) {
    this.$router.push(`/p/${id}`);
  }
}
</script>
<style lang="less">
  .article-list {
    width: 900px;
    text-align: center;
    margin: 15px auto;
    >li {
      display: flex;
      justify-content: stretch;
      border-top: 1px solid #E5E5E5;
      border-bottom: 1px solid #E5E5E5;
      margin-top: -1px;
      padding: 27px 0;
      img {
        width: 184px;
        height: 148px;
        object-fit: contain;
      }
      >article {
        position: relative;
        margin-left: 20px;
        flex-grow: 1;
        h4 {
          font-size: 20px;
          margin-bottom: 24px;
          color: #CA2365;
        }
        p {
          text-align: center;
          color: #666;
        }
        button {
          position: absolute;
          bottom: 0;
          transform: translateX(-50%);
        }
      }
    }
  }
  .loading-container {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>
