<template>
    <section class="article-list">
        <ul v-if="articleList.length > 0">
            <li v-for="(item, index) in articleList" :key="index">
                <img :src="item.img" />
                <article>
                    <h4>{{item.title}}</h4>
                    <p>{{item.overviewContent}}</p>
                    <el-button @click="toDetail(item.articleUuid)" type="primary">More</el-button>
                </article>
            </li>
        </ul>
        <div class="no-data-user" v-else>
            <router-link to="/writer">Create Article</router-link>
        </div>
    </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
    private articleList = [];
    private created () {
        this.getArticles();
    }
    private async getArticles() {
        const res = await (<any> Window).$http.get('/softsheep/personal_articles');
        this.articleList = res;
    }
}
</script>
<style lang="less">
    @import '../assets/css/var.less';
    .article-list {
        .marginCenter
    }
    .no-data-user {
        height: 500px;
        line-height: 500px;
        text-align: center;
        a {
            color: @pink-color;
            &:hover {
                color: lighten(@pink-color, 10%);
            }
        }
    }
</style>