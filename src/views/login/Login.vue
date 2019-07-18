<!-- *!
 * @name : 登录页
 * @Author: haopeng
 * @date : 2019-07-17
 * -->
<template>
    <div class="login">
        <div class="header"></div>
        <div class="content">
            <div class="login-img-wrapper">
                <img src="./img_login.png" alt="">
            </div>
            <div class="game-name-wrapper">
                <div class="game-name">
                    ARKNIGHTS
                </div>
            </div>
            <div class="login-button-wrapper">
                <div class="login-button" @click="login">开始唤醒</div>
            </div>
            <div class="player-info-wrapper">
                <div class="player">
                    <div>
                        玩家
                    </div>
                </div>
                <span class="account">{{account}}</span>
            </div>
        </div>
        <div class="footer">
            <div class="img-wrapper">
                <img src="./img_cp_logo.png" alt="">
            </div>
            <div class="look-notice ship-button">查看公告</div>
            <div class="manage-account ship-button">用户管理</div>
            <div class="cp-message ship-button">用户协议</div>
            <div class="version">
                <div>067506</div>
                <div>Ver: 0.0.1</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {  Vue, Component } from 'vue-property-decorator'
    import { UserModule } from "../../store/modules/user";

    @Component

    export default class Login extends Vue {
        public account: string = ''
        private login () {
            this.$router.push('/link')
        }

        mounted () {
            this.account = UserModule.account
        }}
</script>

<style scoped lang="stylus">
    .login
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        display flex
        flex-flow column nowrap
        .header
            height 90px
            background linear-gradient(to bottom, #333334 0%, #535556 100%)
        .content
            flex 1
            display flex
            flex-flow column nowrap
            justify-content flex-start
            align-items: center
            background linear-gradient(to bottom, #ced1d2 0%, #ddddde 100%)
            .login-img-wrapper
                height 340px
                width 564px
                overflow hidden
                text-align center
                img
                    width 100%
                    height 100%
            .game-name-wrapper
                margin-top 15px
                height 20px
                width 210px
                line-height 20px
                color #fff
                background #211814
                text-align center
            .login-button-wrapper
                margin-top 50px
                height 70px
                width 210px
                background #555555
                color #fff
                font-size 18px
                text-align center
                line-height 70px
                cursor pointer
            .player-info-wrapper
                margin-top 10px
                display flex
                flex-flow row nowrap
                justify-content space-around
                align-items center
                font-size 14px
                .player
                    background #000
                    height 25px
                    width 55px
                    transform skewX(-30deg)
                    color #fff
                    text-align center
                    line-height 25px
                    div
                        transform skewX(30deg)
                .account
                    margin-left 10px
        .footer
            height 90px
            display flex
            flex-flow row nowrap
            justify-content flex-start
            align-items center
            background linear-gradient(to top, #333334 0%, #535556 100%)
            .img-wrapper
                flex 1
                height 100%
                overflow hidden
                text-align left
                img
                    height 100%
                    width 450px
            .ship-button
                height 40px
                width 150px
                line-height 40px
                text-align center
                color #fff
                border 1px solid #fff
                margin-right 15px
                cursor pointer
            .version
                color #fff
                margin-right 10px
                div
                    line-height 20px
</style>
