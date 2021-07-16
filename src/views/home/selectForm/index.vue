<template>
  <div class="selectForm">


    <div class="item" @click="jumpPage('/tradeSecret1',3)" v-show="code==1">
      <div class="item-left">
        <span>商业秘密指导申请表</span>
      </div>
      <div class="item-right" style="color:#27C500;">
        <span>3/3</span>
      </div>
    </div>

    <div class="item" @click="jumpPage('/m_to_z_apply',2)" v-show="code==2">
      <div class="item-left">
        <span>“秘转专”备案申请表</span>
      </div>
      <div class="item-right" style="color:#27C500;">
        <span>2/2</span>
      </div>
    </div>

    <div class="item" @click="jumpPage('/departures1',3)" v-show="code==4">
      <div class="item-left">
        <span>离职人员备案表</span>
      </div>
      <div class="item-right" style="color:#27C500;">
        <span>3/3</span>
      </div>
    </div>


    <div class="item" @click="jumpPage('/business_secret_protect',3)" v-show="code==6">
      <div class="item-left">
        <span>台州市商业秘密保护示范点申报表</span>
      </div>
      <div class="item-right" style="color:#27C500;">
        <span>3/3</span>
      </div>
    </div>


    <div class="item" @click="jumpPage('/innovative_talent1',3)" v-show="code==3">
      <div class="item-left">
        <span>企业创新人才备案登记表</span>
      </div>
      <div class="item-right" style="color:#27C500;">
        <span>3/3</span>
      </div>
    </div>



    <div class="item" @click="jumpPage('/tradeSecretProtection1',2)" v-show="code==7">
      <div class="item-left">
        <span>台州商业秘密保护保险申请表</span>
      </div>
      <div class="item-right">
        <span>2/2</span>
      </div>
    </div>
    <div class="item" @click="jumpPage('/secret_risk_poionter1',3)" v-show="code==5">
      <div class="item-left">
        <span>企业商业秘密保护核心秘密点和风险点</span>
        <span style="font-size: 15px;font-weight: 300">涉密技术信息</span>
      </div>
      <div class="item-right" style="color: #27C500">
        <span>3/3</span>
      </div>
    </div>
    <div class="item" @click="jumpPage('/table/table1',10)" v-show="code==5">
      <div class="item-left">
        <span>企业商业秘密保护措施风险自评表</span>
      </div>
      <div class="item-right" style="color: #A7A7A7">
        <span>1/10</span>
      </div>
    </div>




    <div class="button" v-if="code==2" @click="jumpPage('/m_to_z_apply',2)"  >
      “秘转专”备案申请
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      code: 0
    }
  },
  mounted() {
    this.code = this.$route.query.code
    console.log("code",this.code)
  },
  methods: {

    jumpPage(path,e) {
      // 创建并存储
      let obj = []
      for(let i = 0;i<e;i++){
        obj.push([{}])
      }
      console.log(obj)
      localStorage.setItem('formdata',JSON.stringify(obj))
      this.$router.push({path})
    }

  }
}
</script>

<style lang="stylus" scoped>
.selectForm {
  width 100%;
  padding-top: 15px;

  .item {
    width 90%;
    margin 0 auto;
    margin-bottom 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    display: flex;
    padding 15px 0 15px 0;
    justify-content space-between;
    align-items center;

    .item-left {
      font-family: Alibaba PuHuiTi;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      letter-spacing: -0.24px;
      color: #222222;

      span {
        margin-left 10px;
      }
    }

    .item-right {
      font-family: Alibaba PuHuiTi;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: -0.24px;
      color: #FFA800;

      span {
        margin-right 10px;
      }
    }
  }

  .button {
    width: 80%;
    margin: 0 auto;
    height: 45px;
    color white;
    line-height: 45px;
    text-align: center;
    border-radius: 10px;
    margin-top: 30px;
    background-color: #E64004;
    position absolute;
    left :50%;
    bottom :20px;
    transform:translateX(-50%);
  }
}
</style>
