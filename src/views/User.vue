<template>
    <section class="page-container" style="border: 1px solid red;">
        <section class="user-detail-top">
            <h3>{{userName}}</h3>
            <el-button>Follow</el-button>
        </section>
        <section class="user-detail-content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="Articles" name="articles">
                    <article-list></article-list>
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
import { Component, Vue } from 'vue-property-decorator';
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
    private followerData: Array<FollowType> = [];
    private followingData: Array<FollowType> = [];
    private created() {
        // test
        this.followerData = [
            { userName: 'glowd', userId: '837308951f614317b4eaed6ee56f9934' },
            { userName: 'Helen11', userId: '05fdba530e5b422d845d73a1a31e6908' },
        ]
        this.followingData = [
            { userName: 'helen_12', userId: '37687c0b162d4cca9e3956275f0a9968' },
        ]
        this.getUser();
    }
    private getUser() {
        const userName = window.localStorage.getItem('userName')
        this.userName = userName ? userName : '';
    }
    private toDetail(id: number) {
        this.$router.push(`/p/${id}`);
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