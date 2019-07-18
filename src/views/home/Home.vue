<template>
  <div class="home" id="home">
    <div class="bar">
      <div class="menu" v-for="(item, index) of menuList" :key="index">
        <span class="icon iconfont" v-html="item.icon"></span>
      </div>
    </div>
    <div class="content" id="content">
      <div class="left-wrapper">
        <!-- 等级信息 -->
        <div class="level-wrapper">
          <canvas id="level-canvas" width="160" height="160"></canvas>
          <div class="user-info">
            <div class="user">
              <div class="username">能天使</div>
              <div class="userid">id:109803799</div>
            </div>
            <div class="refresh">
              <span class="icon iconfont">&#xe637;</span>
            </div>
          </div>
        </div>
        <!-- 空间旋转效果 -->
        <div class="transform-stage">
          <div class="transform-item">
            <!-- 说话的内容 -->
            <div class="words-wrapper">
              <div class="words">
                {{words}}
              </div>
            </div>
            <!-- 公告信息 -->
            <div class="notice-wrapper">
              <div class="notice">
                <div class="swiper-wrapper">
                  <swiper :options="option">
                    <swiper-slide>
                      <img src="./../../common/assets/img/activity01.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                      <img src="./../../common/assets/img/activity02.png" alt="">
                    </swiper-slide>
                  </swiper>
                </div>
                <div class="info-wrapper">
                  <div class="friend">
                    <span class="icon iconfont">&#xe60d;</span>
                    <span>好友</span>
                  </div>
                  <div class="info">
                    <span class="icon iconfont">&#xe804;</span>
                    <span>情报</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-wrapper">
        <!-- 空间旋转特效 -->
        <div class="transform-stage">
          <div class="transform-item">
            <!-- 理智值,作战 -->
            <div class="iq-wrapper">
              <div class="iq">
                <div class="current-iq">
                  <span style="position: relative;z-index: 2;">90</span>
                  <div class="current-iq-bg">
                    <span class="icon iconfont">&#xe843;</span>
                  </div>
                </div>
                <div class="total-iq">
                  理智/105
                </div>
              </div>
              <div class="fight">
                <div class="title">作战</div>
                <div class="time">当前</div>
                <div class="cap">2-3 无罪推定</div>
                <div class="fight-bg">
                  <span class="icon iconfont">&#xe6eb;</span>
                </div>
                <div class="fight-bg-shadow">
                  <span class="icon iconfont">&#xe6eb;</span>
                </div>
              </div>
            </div>
            <!-- 编队 干员 -->
            <div class="team-wrapper">
              <div class="team">
                <div class="desc">
                  <div class="title">编队</div>
                  <div class="sub-title"></div>
                </div>
                <div class="bg">
                  <span class="icon iconfont">&#xe8f4;</span>
                </div>
              </div>
              <div class="person">
                <div class="desc">
                  <div class="title">干员</div>
                  <div class="sub-title">角色管理</div>
                </div>
                <div class="bg">
                  <span class="icon iconfont">&#xe8f4;</span>
                </div>
              </div>
            </div>
            <!-- 采购中心 招募 -->
            <div class="shop-wrapper">
              <div class="shop">
                <div class="title">采购中心</div>
                <div class="bg">
                  <span class="icon iconfont">&#xe705;</span>
                </div>
                <div class="msg-tips">
                  <MsgTips :showTips="showTips"></MsgTips>
                </div>
              </div>
              <div class="enlist">
                <div class="title-bar">
                  <span class="icon iconfont">&#xe705;</span> 招募
                </div>
                <div class="enlist-item">
                  <div class="public-enlist">
                    <div class="title">公开招募</div>
                    <div class="bg">
                      <span class="icon iconfont">&#xe705;</span>
                    </div>
                  </div>
                  <div class="person-search">
                    <div class="title">
                      <div class="title">干员寻访</div>
                      <div class="bg">
                        <span class="icon iconfont">&#xe705;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 任务 基建 仓库 -->
            <div class="task-wrapper">
              <div class="task">
                <div class="title">任务</div>
                <div class="bg">
                  <span class="icon iconfont">&#xe651;</span>
                </div>
                <div class="color-bar"></div>
              </div>
              <div class="base">
                <div class="title">
                  <div class="main-title">基建</div>
                  <div class="sub-title">BEAT</div>
                </div>
                <div class="bg">
                  <span class="icon iconfont">&#xe60b;</span>
                </div>
                <div class="tips">
                  <span class="icon iconfont">&#xe794;</span>
                  <span>2</span>
                </div>
              </div>
              <div class="store">
                <div class="title">仓库</div>
                <div class="bg">
                  <span class="icon iconfont">&#xe6ea;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 提示组件 -->
    <SideTips :side="side" :type="type" :icon="icon" :desc="desc"></SideTips>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import SideTips from '@/components/sideTips/SideTips.vue'
    import MsgTips from '@/components/msgTips/MsgTips.vue'

    interface menu {
        icon: string,
        href: string,
        name: string
    }
    interface option {
        autoplay: boolean,
        loop: boolean,
        observer: boolean,
        observeParents: boolean
    }

    interface place {
        x: number,
        y: number
    }

    @Component({
        components: {
            SideTips,
            MsgTips
        }
    })

    export default class Home extends Vue {
        public menuList: menu[] = [
            {
                icon: '&#xe605;',
                href: '',
                name: '设置'
            },
            {
                icon: '&#xe6be;',
                href: '',
                name: '提醒'
            },
            {
                icon: '&#xe67d;',
                href: '',
                name: '邮件'
            },
            {
                icon: '&#xe685;',
                href: '',
                name: '签到'
            }
        ]
        public side: string = 'left'
        public type: string = 'primary'
        public icon: string = '&#xe711;'
        public desc: string = '开始熟悉罗德岛'
        public words: string = '德克萨斯那家伙活的那么潇洒，可多亏有我罩着她，这不是明摆着的事嘛～'
        public option: option = {
            autoplay: true,
            loop: true,
            observer: true,
            observeParents: true
        }
        public showTips!: boolean = true
        // 鼠标当前的坐标
        public mouseXY: place = {
            x: 0,
            y: 0
        }
        // 定时函数返回值
        private timer: number = -9999
        // 鼠标向右移动，旋转角度
        private toRightDeg: number = 5
        // 鼠标向左移动，旋转角度
        private toLeftDeg: number =  5

        mounted () {
            let time_canvas: any = document.getElementById("level-canvas");
            this.drawMain(time_canvas, 70, "orange", "white")
            // 设置页面最小高度
            document.getElementById('home').style.minHeight = document.documentElement.clientHeight + 'px'
        }

        private drawMain(drawing_elem, percent, forecolor, bgcolor) {
            /*
                @drawing_elem: 绘制对象
                @percent：绘制圆环百分比, 范围[0, 100]
                @forecolor: 绘制圆环的前景色，颜色代码
                @bgcolor: 绘制圆环的背景色，颜色代码
            */
            var context = drawing_elem.getContext("2d");
            var center_x = drawing_elem.width / 2;
            var center_y = drawing_elem.height / 2;
            var rad = Math.PI*2/100;
            var speed = 0;

            // 绘制背景圆圈
            function backgroundCircle(){
                context.save();
                context.beginPath();
                context.lineWidth = 8; //设置线宽
                var radius = center_x - context.lineWidth;
                context.lineCap = "round";
                context.strokeStyle = bgcolor;
                context.arc(center_x, center_y, radius, 0, Math.PI*2, false);
                context.stroke();
                context.closePath();
                context.restore();
            }

            //绘制运动圆环
            function foregroundCircle(n){
                context.save();
                context.strokeStyle = forecolor;
                context.lineWidth = 8;
                context.lineCap = "round";
                var radius = center_x - context.lineWidth;
                context.beginPath();
                context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
                context.stroke();
                context.closePath();
                context.restore();
            }

            //绘制文字
            function text(n){
                context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
                context.fillStyle = forecolor;
                var font_size = 40;
                context.font = font_size + "px Helvetica";
                var text_width = context.measureText(n.toFixed(0)+"%").width;
                context.fillText(n.toFixed(0)+"%", center_x-text_width/2, center_y + font_size/2);
                context.restore();
            }

            //执行动画
            (function drawFrame(){
                window.requestAnimationFrame(drawFrame);
                context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
                backgroundCircle();
                text(speed);
                foregroundCircle(speed);
                if(speed >= percent) return;
                speed += 1;
            }());
        }

    }
</script>

<style lang="stylus" scoped>
@import "../../common/assets/styl/index.styl"
.home
  width 100%
  background gainsboro
  display flex
  flex-flow column nowrap
  background url("./../../common/assets/img/img_angel.png") no-repeat center
  background-size 100% 100%
  .bar
    height 80px
    display flex
    flex-flow row nowrap
    justify-content flex-start
    align-items center
    .menu
      margin-left 25px
      span.icon
        font-size 30px
        color #fff
      &:nth-child(3)
        span.icon
          font-size 36px
      &:nth-child(4)
        span.icon
          font-size 34px
  .content
    flex 1
    display flex
    flex-flow row nowrap
    justify-content space-between
    width 100%
    .left-wrapper
      flex 0 0 40%
      transition all 2s ease-in-out
      // 空间旋转特效
      .transform-stage
        h-3d-stage(-30deg, 160px)
      .transform-item
        h-3d-item(5deg)
      .level-wrapper
        margin-top 180px
        padding-left 65px
        display flex
        flex-flow column nowrap
        justify-content center
        align-items flex-start
        .user-info
          display flex
          flex-flow row nowrap
          justify-content space-between
          align-items center
          .user
            width 160px
            .username
              color $level
              font-size 40px
              text-align center
            .userid
              margin-top 4px
              color $level
              text-align center
          .refresh
            margin-left 100px
            color $level
            height 44px
            width 44px
            border-radius 50%
            border 2px solid gray
            background-color #313131
            text-align center
            line-height 44px
            .iconfont
              font-size 30px !important
      .words-wrapper
        width 460px
        margin-top 40px
        margin-left 50px
        .words
          width 100%
          height 110px
          box-sizing border-box
          padding 10px
          background rgba(0, 0, 0, .7)
          color #fff
          line-height 45px
          font-size 18px
      .notice-wrapper
        margin-top 20px
        width 460px
        height 130px
        box-sizing border-box
        margin-left 50px
        .notice
          display flex
          flex-flow row nowrap
          justify-content flex-start
          width 100%
          height 100%
          .swiper-wrapper
            width 66.67%
            img
              width 100%
              height 100%
              overflow hidden
          .info-wrapper
            margin-left 10px
            flex 1
            display flex
            flex-flow column nowrap
            justify-content space-between
            .friend
              height 45%
              padding 10px
              box-sizing border-box
              background-color #424242
              display flex
              flex-flow row nowrap
              justify-content center
              align-items center
              color #fff
              span.icon
                width 44px
                font-size 30px
              span:last-child
                flex 1
                text-align right
                font-size 24px
                font-weight bold
            .info
              height 45%
              padding 10px
              box-sizing border-box
              background-color #ecebe9
              display flex
              flex-flow row nowrap
              justify-content center
              align-items center
              color #000
              span.icon
                width 44px
                font-size 30px
              span:last-child
                flex 1
                text-align right
                font-size 24px
                font-weight bold
    .right-wrapper
      flex 0 0 45%
      margin-top 60px
      .transform-stage
        h-3d-stage(15deg, 160px)
        .transform-item
          height 660px
          h-3d-item(-2.5deg)
          margin-right 30px
          .iq-wrapper
            margin-left 10px
            width 600px
            height 180px
            box-sizing border-box
            background-color #fdfdfd
            display flex
            flex-flow row nowrap
            padding 20px
            .iq
              display flex
              flex-flow column nowrap
              width 160px
              height 100%
              .current-iq
                flex 1
                background-color #c3c2c1
                padding-right 20px
                color #353532
                text-align right
                font-size 80px
                font-weight bold
                position relative
                .current-iq-bg
                  position absolute
                  top 0px
                  left 2px
                  span
                    font-size 100px
                    color #fff
              .total-iq
                height 40px
                line-height 40px
                background-color #353532
                color #fff
                font-size 22px
                text-align right
                padding-right 20px
            .fight
              padding-left 20px
              position relative
              .title
                font-size 60px
                font-weight bold
                text-align left
                line-height 70px
              .time
                display inline-block
                margin-top 5px
                height 30px
                line-height 30px
                color #fff
                padding 0 10px
                border-radius 3px
                background-color #353532
              .cap
                line-height 35px
                color #353532
              .fight-bg
                position absolute
                top -10px
                left 130px
                width 160px
                height 160px
                z-index 2
                span
                  font-size 140px
                  color #e1e1e1
              .fight-bg-shadow
                position absolute
                top -10px
                left 160px
                width 160px
                height 160px
                span
                  font-size 140px
                  color #f0f0f0
                  z-index 1
          .team-wrapper
            display flex
            flex-flow row nowrap
            justify-content flex-start
            height 130px
            .team, .person
              display flex
              flex-flow row nowrap
              justify-content space-around
              height 100%
              box-sizing border-box
              padding 10px
              background-color #fdfdfd
              margin-top 20px
              width 280px
              .desc
                .title
                  font-size 60px
                  color #000
                  font-weight bold
                .sub-title
                  margin-top 10px
                  font-size 22px
                  color #9a9a99
              .bg
                span
                  font-size 100px
                  color #e5e4e0
            .person
              margin-left 20px
          .shop-wrapper
            margin-top 40px
            margin-left 20px
            background-color #49a2d6
            height 130px
            width 600px
            display flex
            flex-flow row nowrap
            justify-content flex-start
            .shop
              position relative
              height 100%
              width 198px
              border-right 2px solid #454545
              .title
                position absolute
                left 0
                bottom 20px
                line-height 50px
                width 100%
                color #fff
                font-size 40px
                text-align center
                z-index 2
              .bg
                position absolute
                top 0
                right 0
                height 130px
                width 130px
                z-index 1
                span
                  color #6abbe1
                  text-align right
                  line-height 130px
                  font-size 100px
              .msg-tips
                position absolute
                top -4px
                right 0
                height 22.63px
                width 22.63px
            .enlist
              height 100%
              width 400px
              display flex
              flex-flow column nowrap
              justify-content flex-start
              .title-bar
                background-color #454545
                height 44px
                line-height 44px
                margin 3px
                color #fff
                font-size 22px
                span
                  font-size 22px
                  margin-left 10px
                  color #717171
              .enlist-item
                display flex
                flex-flow row nowrap
                .public-enlist, .person-search
                  flex 1
                  position relative
                  .title
                    position relative
                    height 80px
                    line-height 80px
                    font-size 32px
                    color #fff
                    text-align center
                    z-index 2
                  .bg
                    position absolute
                    top 0
                    left 0
                    height 80px
                    width 80px
                    z-index 1
                    vertical-align top
                    text-align center
                    padding-top 7px
                    box-sizing border-box
                    span
                      color #6abbe1
                      font-size 72px
                      line-height 60px

                .public-enlist
                  border-right 2px solid #454545
          .task-wrapper
            height 130px
            width 600px
            display flex
            flex-flow row nowrap
            margin-top 20px
            .task, .base
              position relative
              display flex
              flex-flow row nowrap
              background-color #fff
              width 230px
              .title
                flex 1
                padding 15px
                color #000
                font-size 54px
              .bg
                width 60px
                height 100%
                padding 15px
                span
                  color #dbdbdb
                  font-size 72px
            .task
              .color-bar
                position absolute
                width 190px
                height 6px
                top -3px
                left 20px
                background-color #ec6933
            .base
              margin-left 20px
              .title
                .sub-title
                  font-size 14px
                  font-weight bold
                  color #ec6933
              .tips
                position absolute
                top -5px
                right -5px
                display flex
                flex-flow row nowrap
                justify-content space-around
                background rgba(4, 143, 243, 0.72)
                color #fff
                width 90px
                height 45px
                span
                  font-size 38px
            .store
              width 120px
              background #424242
              .title
                font-size 42px
                height 60px
                line-height 60px
                text-align center
                color #fff
              .bg
                text-align center
                span
                  font-size 66px
                  color gray
</style>
