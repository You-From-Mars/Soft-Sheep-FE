<template>
    <section class="page-container">
        <section class="user-detail-top">
            <h3>{{userName}}</h3>
            <el-button @click="follow">Follow</el-button>
        </section>
        <section class="user-detail-content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="Articles" name="articles">
                    <article-list :articleList="articleList"></article-list>
                </el-tab-pane>
                <el-tab-pane label="Followers" name="followers">
                    <follow-list :followData="followerData"></follow-list>
                </el-tab-pane>
                <el-tab-pane label="Following" name="following">
                    <follow-list :followData="followingData"></follow-list>
                </el-tab-pane>
            </el-tabs>
        </section>
    </section>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Tabs, TabPane } from 'element-ui';
import articleList from '../components/ArticleList.vue';
import FollowList from '../components/FollowList.vue';
import { FollowType } from '../utils/types';

Vue.use(Tabs);
Vue.use(TabPane);


@Component({
    components: {
        articleList,
        FollowList,
    },
})
export default class User extends Vue {
    private activeName = 'articles';
    private userName: string = '';
    private userId: string = '';
    private followerData: Array<FollowType> = [];
    private followingData: Array<FollowType> = [];
    private articleList: Array<any> = [];
    private created() {
        this.getData();
        // test
        this.followerData = [
            { userName: 'glowd', userId: '837308951f614317b4eaed6ee56f9934' },
            { userName: 'Helen11', userId: '05fdba530e5b422d845d73a1a31e6908' },
        ]
        this.followingData = [
            { userName: 'helen_12', userId: '37687c0b162d4cca9e3956275f0a9968' },
        ]
    }
    @Watch('$route')
    onUserChange() {
        this.getData();
    }
    private getData() {
        this.userId = this.$route.params.id;
        this.getArticles();
        this.getFollower();
        this.getFollowing();
    }
    private async getArticles() {
        const res = await (<any> Window).$http.get(`/softsheep/personal_articles?userId=${this.$route.params.id}`);
        this.articleList = res;
        this.userName = this.articleList[0].author;
    }
    private async getFollower() {
        const res = await (<any> Window).$http.get('/softsheep/followers');
        console.log('res---', res);
    }
    private async getFollowing() {
        const res = await (<any> Window).$http.get('/softsheep/following');
        console.log('getFollowing');
    }
    private toDetail(id: number) {
        this.$router.push(`/p/${id}`);
    }
    private async follow() {
        const res = await (<any> Window).$http.post('/softsheep/follow', { id: this.userId, followingName: this.userName});
        console.log('res----', res);
    }
}
</script>
<style lang="less">
@import '../assets/css/var.less';
.user-detail-top {
    padding: 20px 0;
    display: flex;
    > h3 {
        line-height: 40px;
        margin-right: 20px;
    }
    .marginCenter
}
.user-detail-content {
    .marginCenter
}
</style>