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
            <el-button @click="toDetail(item.id)" type="primary">More</el-button>
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
  public title: string = 'Home';
  private articleList: any = [
    {
      img: require('../assets/images/article_img.jpg'),
      title: 'title',
      content: 'I have to give a little shoutout to these cupcake pops, .',
      id: 1,
    },
    {
      img: require('../assets/images/article_img.jpg'),
      title: 'title',
      content: 'I have to give a little shoutout to these cupcake pops, too. It was these .',
      id: 2,
    },
    {
      img: require('../assets/images/article_img.jpg'),
      title: 'title',
      content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties .',
      id: 3,
    },
    {
      img: require('../assets/images/article_img.jpg'),
      title: 'title',
      content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I .',
      id: 3,
    },
    {
      img: require('../assets/images/article_img.jpg'),
      title: 'title',
      content: 'I have to give a little shoutout to these cupcake pops, too. It was these cuties that I first .',
      id: 4,
    },
  ];
  async created() {
    (<any>Window).$http.post('/softsheep/article', { title: '11', content: '22' });
  }
  toDetail(id: number) {
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
</style>
