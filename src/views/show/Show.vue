<!-- *!
 * @name : 登录之前的展示页面
 * @Author: haopeng
 * @date : 2019-07-17
 * -->
<template>
    <div class="show" ref="show">
        <div class="header">
            <p>清除缓存</p>
            <p>Ver: 0.0.1</p>
        </div>
        <div class="content">
            <swiper :options="options">
                <swiper-slide>
                    <img src="./img_desc_01.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="./img_desc_02.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="./img_desc_04.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="./img_desc_04.png" alt="">
                </swiper-slide>
            </swiper>
        </div>
        <div class="footer">
            <div class="start" @click="toLogin">
                <div class="star"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component

    export default class Show extends Vue {

        private options: Object = {
            autoplay: true,
            loop: true,
            observer: true,
            observeParents: true
        }

        private toLogin () {
            this.$router.push('/login')
        }
    }
</script>

<style scoped lang="stylus">
    @import './../../common/assets/styl/index.styl'
    .show
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        overflow hidden
        display flex
        flex-flow column nowrap
        justify-content flex-start
        .header
            height 90px
            width 100%
            color $show_font_color
            font-size 16px
            font-style italic
            padding-left 10px
            background $show_bg
        .content
            flex 1
            img
                height 100%
                width 100%
            & >>> .swiper-container
                background $show_bg
        .footer
            position relative
            height 90px
            display flex
            flex-flow row nowrap
            justify-content center
            align-items center
            z-index 9999
            background $show_bg
            .start
                position relative
                width 52px
                height 52px
                border 4px solid $show_start
                transform rotate(45deg)
                background-color transparent
                cursor pointer
                &:before
                    content ''
                    position absolute
                    top 9px
                    left 13px
                    height 0
                    width 0
                    border-width 4px 6px
                    border-style solid
                    border-color transparent transparent transparent $show_start
                    transform rotate(-45deg)
                &:after
                    content 'START'
                    position absolute
                    color $show_start
                    font-size 12px
                    width 100%
                    height 56px
                    line-height 56px
                    text-align center
                    font-style italic
                    transform rotate(-45deg)
                .star
                    position absolute
                    top -4px
                    left -4px
                    width 52px
                    height 52px
                    border 4px solid $show_start
                    animation star 1s ease-in-out infinite
    @keyframes star
        0%
            opacity 1
        100%
            opacity 0
            transform scale(1.8)
</style>
