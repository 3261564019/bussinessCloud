<template>
  <div class="choose_root" ref="root">
    <div class="content" ref="content">
      <div class="title">
        <span style="color: #bd4c4e" @click="cancel">取消</span>
        <span>企业资产</span>
        <span style="color: #016EF9" @click="commit">确认</span>
      </div>
      <div class="choose_item" :class="{'active':choose_index == index}" @click="choose_index=index" v-for="(item,index) in items" :key="index">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "choose_root",
  data:()=>{
    return {
      choose_index:0
    }
  },
  props:{
    items:Array,
    show:Boolean
  },
  created(){
    console.log(this.items,this.choose_index);

  },
  mounted(){
    this.$refs.root.style.display='none';
  },
  methods: {
    commit() {
      this.$emit("banlancechoose",this.choose_index);
      this.cancel();
    },
    cancel(){
      this.$refs.root.style.display='none';
      this.$emit("cancelchoose");   //告诉外界取消了显示
    },
    showcontent(){
        this.$refs.root.style.display='block';
    }
  //  外界有个show字段，外界通过那个字段决定该控件是否显示，那个字段被传进来了，通过监听该字段来控制显示，
  }
  ,watch:{
    show(now){
      if(now){
        this.showcontent();
      }
    }
  }
}
</script>

<style  lang="stylus" scoped>
  .choose_root{
    width:100%;
    height:100%;
    position:fixed
    left:0;
    top:0;
    background-color:rgba(0,0,0,.3);
    .content{
      width:100%;
      padding:4px;
      box-sizing:border-box;
      background-color:#ffffff;
      position absolute;
      bottom:0;
      left:0;
      border-radius:10px 10px  0px  0px;

      .title{
        display: flex;
        justify-content space-between;
        line-height:25px;
        padding:10px;
      }
      .choose_item{
        width:80%;
        margin:0 auto;
        line-height:50px;
        border-bottom:1px solid #9C9C9C;
        text-align center;
        font-size:14px;
      }
      .choose_item:last-child{
        border:none;
      }
      .active{
        color:#1a5ec5;
      }
    }
  }
</style>