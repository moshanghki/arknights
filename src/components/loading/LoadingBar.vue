<!-- *!
 * @name : loading
 * @Author: haopeng
 * @date : 2019-07-16
 * -->
<template>
    <div class="loading-wrapper" v-if="showLoading">
        <div class="loading">
            <div class="loading-left">
                <div class="loading-left-percent" ref="left"></div>
            </div>
            <div class="loading-right">
                <div class="loading-right-percent" ref="right"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component

    export default class LoadingBar extends Vue {
        @Prop({
            type: Number,
            default: 2
        })
        public time?: number
        @Prop({
            type: Boolean,
            default: true
        })
        public showLoading?: boolean

        mounted () {
            // loading从0 -> 100%
            setTimeout(() => {
                (this.$refs.left as HTMLDivElement).style.width = '100%';
                (this.$refs.right as HTMLDivElement).style.width = '100%';
            }, 500)
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../common/assets/styl/index.styl'
    .loading-wrapper
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        background transparent
        .loading
            position absolute
            top 62%
            left 0
            height 10px
            width 100%
            display flex
            flex-flow row nowrap
            background transparent
            .loading-left
                flex 1
                display flex
                flex-flow row nowrap
                .loading-left-percent
                    height 100%
                    width 20px
                    background $loading
                    transition all 2s ease-in-out
            .loading-right
                flex 1
                display flex
                flex-flow row-reverse nowrap
                .loading-right-percent
                    height 100%
                    width 10px
                    background $loading
                    transition all 2s ease-in-out
</style>
