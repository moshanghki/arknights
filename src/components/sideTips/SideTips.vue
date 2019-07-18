<!-- *!
 * @name : 附着在屏幕左侧或右侧的提示组件
 * @Author: haopeng
 * @date : 2019-07-11
 * @desc:
 * 应传入的props的值为：
 * side: 'left', 'right'
 * icon: 'iocn的字符编码'
 * desc: '提示信息'
 * type: 'primary', 'success', 'warning'
 * -->
<template>
    <div class="side-tips" :class="[side, type]">
        <div class="icon">
            <span class="icon iconfont" v-html="icon"></span>
        </div>
        <div class="desc">
            {{desc}}
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component

    export default class SideTips extends Vue {
        @Prop()
        private side!: string
        @Prop()
        private icon!: string
        @Prop()
        private desc!: string
        @Prop({
            type: String,
            default: 'primary'
        })
        private type?: string
    }
</script>

<style scoped lang="stylus">
    .side-tips
        width 170px
        height 65px
        display flex
        position absolute
        &.left
            flex-flow row nowrap
            justify-content flex-start
            align-items center
            top 80px
            left 0
            &.primary
                background linear-gradient(to right, #15b3f3 40%, transparent 100%)
            &.success
                background linear-gradient(to right, yellowgreen 40%, transparent 100%)
            &.warning
                background linear-gradient(to right, brown 40%, transparent 100%)
        &.right
            flex-flow row-reverse nowrap
            justify-content flex-start
            align-items center
            top 80px
            right 0
            background linear-gradient(to left)
            &.primary
                background linear-gradient(to left, #15b3f3 40%, transparent 100%)
            &.success
                background linear-gradient(to left, yellowgreen 40%, transparent 100%)
            &.warning
                background linear-gradient(to left, brown 40%, transparent 100%)
        .icon
            width 65px
            color #fff
            line-height 65px
            font-size 40px
            text-align center
        .desc
            flex 1
            color: #fff
</style>
