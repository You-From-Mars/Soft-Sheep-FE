<template>
    <section class="article-markdown">
        <div>
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
            source: '',
        }
    }
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
        textarea {
            height: 100%;
            border: none;
        }
    }
    .markdowm-wrapper {
        overflow-y: scroll;
    }
}
</style>
