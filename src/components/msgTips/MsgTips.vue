<!-- *!
 * @name : 消息提示组件
 * @Author: haopeng
 * @date : 2019-07-16
 * -->
<template>
    <div class="msg-tips" v-if="showTips">
        <div class="msg-border"></div>
        <div class="msg-core"></div>
    </div>
</template>

<script lang="ts">
    import { Vue, Prop, Component } from 'vue-property-decorator'

    @Component

    export default class MsgTips extends Vue {
        @Prop({
            type: Boolean,
            default: false
        })
        public showTips!: boolean
    }
</script>

<style scoped lang="stylus">
    @import "../../common/assets/styl/index.styl"
    .msg-tips
        position relative
        transform rotate(45deg)
        .msg-border
            width 16px
            height 16px
            background-color transparent
            border 2px solid $msg_tips
            animation star 2s infinite ease-in-out
        .msg-core
            position absolute
            top 6px
            left 6px
            width 8px
            height 8px
            background-color $msg_tips
    @keyframes star
        0%
            opacity 1
        50%
            opacity 0
        100%
            opacity 1
</style>
