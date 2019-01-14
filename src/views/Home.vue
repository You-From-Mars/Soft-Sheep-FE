<template>
  <div>
    <header-title :titleContent="title"></header-title>
    <div class="page-container" id="page_home">
      <ul class="article-list">
        <li v-for="(item, index) in articleList" :key="index">
          <img :src="item.img" />
          <article>
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
            <el-button type="primary">More</el-button>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from '../components/HeaderTitle.vue';

@Component({
  components: {
    HeaderTitle,
  },
})
export default class Home extends Vue {
  public title: string = '首页';
  private articleList: any = [
    { img: require('../assets/images/article_img.jpg'), title: 'title', content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.', },
    { img: require('../assets/images/article_img.jpg'), title: 'title', content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.', },
    { img: require('../assets/images/article_img.jpg'), title: 'title', content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.', },
    { img: require('../assets/images/article_img.jpg'), title: 'title', content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.', },
    { img: require('../assets/images/article_img.jpg'), title: 'title', content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first posted on the site in February of 2008 that unknowingly started a cake pop phenomenon.', },
  ];
}
</script>
<style lang="less">
  .article-list {
    width: 900px;
    margin: 15px auto;
    >li {
      display: flex;
      justify-content: space-between;
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
        h4 {
          font-size: 20px;
          margin-bottom: 24px;
          color: #CA2365;
        }
        p {
          text-align: left;
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
</style>
