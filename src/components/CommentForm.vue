<template>
    <section>
        <section class="article-comment-form">
            <i></i>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="Comment..."
                v-model="commentContent">
            </el-input>
        </section>
        <div class="article-button-wrapper">
            <el-button @click="commentSubmit" class="article-post-button">Post</el-button>
        </div>
    </section>

</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({
    name: 'CommentForm',
})
export default class CommentForm extends Vue {
    private commentContent: string = '';
    @Emit('updateComment')
    private async commentSubmit() {
        const articleId = this.$route.params.id;
        const res = await (<any> Window).$http.post('/softsheep/comment', {
            content: this.commentContent,
            articleId,
        });
        if (res.data === '保存成功') {
            this.$message.success('评论成功');
            this.commentContent = '';
        }
    }
}
</script>
<style lang="less">
    @import '../assets/css/var.less';

    .article-comment-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
            display: block;
            width: 46px;
            height: 46px;
            border: 1px solid @pink-color;
            border-radius: 50%;
            margin-right: 20px;
        }
    }
    .el-button.article-post-button {
        width: 70px;
        height: 28px;
        line-height: 28px;
        padding: 0;
        background-color: @pink-color;
        color: #fff;
        border: none;
        &:hover {
            background: lighten(@pink-color, 10%);
            color: #fff;
        }
    }
    .article-button-wrapper {
        margin: 20px 0;
        display: flex;
        justify-content: flex-end;
    }
</style>