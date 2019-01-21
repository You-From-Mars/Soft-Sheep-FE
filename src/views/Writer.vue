<template>
    <section class="article-markdown">
        <div class="markdown-left">
            <el-input placeholder="Article title" v-model="title"></el-input>
            <div class="markdown-tool">
                <el-button @click="submit">Publish</el-button>
            </div>
            <el-input v-model="source" type="textarea"></el-input>
        </div>
        <div class="markdowm-wrapper">
            <vue-markdown :source="source"></vue-markdown>
        </div>
    </section>
</template>
<script>
import VueMarkdown from 'vue-markdown';
import { Component, Vue } from 'vue-property-decorator';

export default {
    components: {
        VueMarkdown,
    },
    data() {
        return {
            userId: '1',
            title: '',
            source: '',
        };
    },
    methods: {
        async submit() {
            const body = {
                title: this.title,
                content: this.source,
            };
            const res = await Window.$http.post('/softsheep/article', body);
            if (res.data === '创建成功') {
                this.$router.push(`/u/${this.userId}`);
            }
        },
    },
};
</script>
<style lang="less">
@import '../assets/css/var.less';
.article-markdown {
    display: flex;
    height: calc(~"100% - 57px");
    > div {
        width: 50%;
        height: 100%;
        border: 1px dashed @pink-color;
        .el-textarea {
            height: calc(~"100% - 90px");
        }
        textarea {
            height: 100%;
            border: none;
        }
    }
    .markdowm-wrapper {
        overflow-y: scroll;
    }
    .markdown-left {
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
}
</style>
