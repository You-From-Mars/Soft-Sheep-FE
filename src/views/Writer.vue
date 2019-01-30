<template>
    <section class="article-markdown">
        <div class="markdown-header">
            <el-input placeholder="Article title" v-model="title"></el-input>
            <div class="markdown-tool">
                <el-button v-if="articleId" @click="submit(articleId)">Update</el-button>
                <el-button v-else @click="submit('')">Publish</el-button>
            </div>
        </div>
        <mavon-editor v-model="source"/>
    </section>
</template>
<script>
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import { Vue } from 'vue-property-decorator';

Vue.use(mavonEditor);

export default {
    data() {
        return {
            title: '',
            source: '',
            articleId: '',
        };
    },
    created() {
        this.articleId = this.$route.query.id;
        if (this.articleId) {
            this.getArticleDetail();
        }
    },
    methods: {
        async getArticleDetail() {
            const res = await Window.$http.get(`/softsheep/article_detail?articleId=${this.articleId}`);
            this.title = res.title;
            this.source = res.content;
        },
        async submit(id = '') {
            const body = {
                title: this.title,
                content: this.source,
                id,
            };
            const res = await Window.$http.post('/softsheep/article', body);
            this.$router.push(`/p/${res}`);
        },
    },
};
</script>
<style lang="less">
@import '../assets/css/var.less';
.article-markdown {
    // display: flex;
    height: calc(~"100% - 57px");
    .markdowm-wrapper {
        overflow-y: scroll;
    }
    .markdown-header {
        .markdown-tool {
            height: 35px;
            padding: 10px 10px 0 0;
            border-bottom: 1px solid @pink-color;
            button {
                float: right;
                width: 70px;
                height: 28px;
                line-height: 28px;
                padding: 0;
                background: @pink-color;
                border: none;
                color: #fff;
                &:hover {
                    background: lighten(@pink-color, 10%);
                }
            }
        }
    }
    .markdown-body {
        height: calc(~"100% - 91px");
    }
}
</style>
