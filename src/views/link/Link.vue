<!-- *!
 * @name : 连接服务页面
 * @Author: haopeng
 * @date : 2019-07-17
 * -->
<template>
    <div class="link">
        <div class="header"></div>
        <div class="content">
            <div class="serve">
                <div class="serve-title">服务器</div>
                <div class="serve-name">泰拉</div>
                <div class="serve-num">
                    <span>#</span>
                    <span>0</span>
                </div>
            </div>
            <div class="link-info">正在尝试与Rhodes Island取得神经连接</div>
        </div>
        <div class="footer">
            <div class="img">
                <img src="img_cp_logo.png" alt="">
            </div>
            <div class="info">
                <p>id: 1187098867</p>
                <p>Ver: 0.0.1</p>
            </div>
        </div>
        <LoadingBar></LoadingBar>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import LoadingBar from '@/components/loading/LoadingBar.vue'

    @Component({
        components: {
            LoadingBar
        }
    })

    export default class Link extends Vue {
        mounted () {
            setTimeout(() => {
                this.$router.push('/')
            }, 3000)
        }
    }
</script>

<style scoped lang="stylus">
    @import './../../common/assets/styl/index.styl'
    .link
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        display flex
        flex-flow column nowrap
        background red
        .header
            height 90px
            background #080808
        .content
            flex 1
            background #242526
            display flex
            flex-flow column nowrap
            align-items center
            .serve
                margin-top 200px
                height 255px
                width 150px
                background #323333
                border 1px solid #9f9c8e
                display flex
                flex-flow column nowrap
                justify-content flex-start
                align-items center
                color #fff
                .serve-title
                    margin-top 25px
                    font-size 16px
                .serve-name
                    margin-top 4px
                    font-size 24px
                .serve-num
                    margin-top 25px
                    height 100px
                    span:first-child
                        font-size 28px
                        vertical-align top
                    span:last-child
                        font-size 100px
            .link-info
                margin-top 120px
                height 20px
                line-height 20px
                color #fff
                font-size 16px
        .footer
            height 90px
            background #080808
            display flex
            flex-flow row nowrap
            justify-content space-between
            align-items center
            .img
                width 450px
                height 90px
                overflow hidden
                img
                    height 100%
                    width 100%
            .info
                color #fff
</style>
