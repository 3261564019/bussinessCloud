<template>
  <div class="controls">
    <div class="controls-piece"  @click="capture('save')">
      <img src="@/assets/home/group20.png">
      <span>保存</span>
    </div>
<!--    <div class="controls-piece" style="color: #E64004" @click="capture('download')">-->
<!--      <img src="@/assets/home/group21.png">-->
<!--      <span>下载</span>-->
<!--    </div>-->
<!--    <div class="controls-piece" style="color: #016EF9" @click="capture('upload')">-->
<!--      <img src="@/assets/home/group22.png">-->
<!--      <span>上传</span>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Controls",
  methods:{
    capture(type){
      this.$emit(type);
    }
  }
}
</script>

<style lang="stylus" scoped>
.controls {
  width 100px;
  position fixed;
  bottom 40px;
  right 0;
  display flex;
  flex-direction column;
  justify-content center;
  align-items center;

  .controls-piece {
    width 50px;
    height 50px;
    display flex;
    flex-direction column;
    align-items center;
    justify-content center;
    font-family: Alibaba PuHuiTi;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.24px;
    color: #FFA800;
    background-color #fff;
    border-radius 50%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin-bottom 10px;


    img {
      width 18px;
      height: 18px;
      margin-bottom 3px;
    }
  }
}

</style>