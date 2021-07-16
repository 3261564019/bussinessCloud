<template>
  <div class="selectForm">
    <div
      class="item"
      @click="jumpPage('/tradeSecret/table1')"
      v-show="code == 1"
    >
      <div class="item-left">
        <span>商业秘密指导申请表</span>
      </div>
      <div class="item-right">
        <span>3/3</span>
      </div>
    </div>

    <div
      class="item"
      @click="jumpPage('/departures/table1')"
      v-show="code == 4"
    >
      <div class="item-left">
        <span>离职人员备案申请表</span>
      </div>
      <div class="item-right">
        <span>3/3</span>
      </div>
    </div>

    <div
      class="item"
      @click="jumpPage('/tradeSecretProtection/table1')"
      v-show="code == 7"
    >
      <div class="item-left">
        <span>台州商业秘密保护保险申请表</span>
      </div>
      <div class="item-right">
        <span>2/2</span>
      </div>
    </div>

    <div class="item" @click="jumpPage('/table/table1')" v-show="code == 5">
      <div class="item-left">
        <span>企业商业秘密保护核心秘密点和风险点</span>
        <span style="font-size: 15px; font-weight: 300">涉密技术信息</span>
      </div>
      <div class="item-right" style="color: #27c500">
        <span>1/10</span>
      </div>
    </div>

    <div class="item" @click="jumpPage()" v-show="code == 5">
      <div class="item-left">
        <span>企业商业秘密保护措施风险自评表</span>
      </div>
      <div class="item-right" style="color: #a7a7a7">
        <span>1/10</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: 0,
    };
  },
  mounted() {
    this.code = this.$route.query.code;
    console.log(this.code);
  },
  methods: {
    jumpPage(e) {
      this.$router.push({ path: e });
    },
  },
};
</script>

<style lang="stylus">
.selectForm {
  width: 100%;
  padding-top: 15px;

  .item {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    display: flex;
    padding: 15px 0 15px 0;
    justify-content: space-between;
    align-items: center;

    .item-left {
      font-family: Alibaba PuHuiTi;
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      letter-spacing: -0.24px;
      color: #222222;

      span {
        margin-left: 10px;
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
        margin-right: 10px;
      }
    }
  }
}
</style>
