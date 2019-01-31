<template>
    <div>
        <ul class="comment-container">
            <li class="comment-item" v-for="(item, index) in commentList" :key="index">
                <i class="user-avartar"></i>
                <section>
                    <div class="comment-header">
                        <h4 class="comment-username">{{item.userName}}</h4>
                        <span class="comment-date">{{item.createdTime}}</span>
                    </div>
                    <p class="comment-content">{{item.commentContent}}</p>
                </section>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
interface commentItem {
  commentUuid: String,
  articleUuid: String,
  userName: String,
  createdTime: String,
  commentContent: String,
};
@Component({
    name: 'CommentItem',
})
export default class CommentItem extends Vue {
    @Prop(Array) commentList!: commentItem[];
}
</script>
<style lang="less">
@import '../assets/css/var.less';
.comment-container {
    border: 1px dashed #F8C6DA;
    padding: 20px;
}
.comment-item {
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    i.user-avartar {
        width: 46px;
        height: 46px;
        border: 1px solid @pink-color;
        border-radius: 50%;
        margin-right: 20px;
    }
    .comment-username {
        color: @font-color;
        margin-right: 20px;
    }
    .comment-date {
        color: #CCCCCC;
        font-size: 12px;
    }
    .comment-header {
        display: flex;
        align-items: center;
    }
    .comment-content {
        color: @font-color;
        line-height: 25px;
    }
}
</style>