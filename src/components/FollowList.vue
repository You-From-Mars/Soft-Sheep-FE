<template>
    <ul class="follow-list">
        <li v-for="(item, index) in followData" :key="index">
            <router-link :to="`/u/${item.userId}`">{{item.userName}}</router-link>
        </li>
    </ul>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: {
        followData: Array,
    }
})
export default class FollowList extends Vue {

}
</script>
<style lang="less">
@import '../assets/css/var.less';
.follow-list {
    > li {
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        a {
            color: @pink-color;
        }
        &:hover a{
            color:  lighten(@pink-color, 10%);
        }
    }
}
</style>
