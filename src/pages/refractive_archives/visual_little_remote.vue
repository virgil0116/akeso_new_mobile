<template>
  <div>
    <p>远距离</p>
    <group>
      <datetime
        v-model="date"
        title= "检查日期"
        @on-change="change"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"/>
    </group>
    <div class="container">
      <h3 class="title">调节反应BCC(D)</h3>
      <p class="reference-tit">参考值：0—+0.75</p>
      <ul class="list">
        <li>
          <span class="left-bar">OU</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">R </span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">L</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">负相对调节NRA(D)</h3>
      <p class="reference-tit">参考值：+1.75—+2.25</p>
      <ul class="list">
        <li>
          <span class="left-bar">OU</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">R </span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">L</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">正相对调节PRA(D)	</h3>
      <p class="reference-tit">参考值：-1.75—-3.00</p>
      <ul class="list">
        <li>
          <span class="left-bar">OU</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">R </span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">L</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">隐斜(△)</h3>
      <p class="reference-tit">参考值：0—-6</p>
      <ul class="list">
        <li>
          <span class="left-bar">H:</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">V:</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">AC/A(△/D)</h3>
      <p class="reference-tit">参考值：2—5/1 3—6/1</p>
      <ul class="list">
        <li>
          <span class="left-bar">梯度法:</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">计算法:</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">散开储备力BI(△)</h3>
      <p class="reference-tit">参考值：11—15/19—23/10—16</p>
      <ul class="list">
        <li>
          <span class="left-bar">模糊点</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">破裂点</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">恢复点</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">集合储备力BO(△)</h3>
      <p class="reference-tit">参考值：14—24/18—24/7—15</p>
      <ul class="list">
        <li>
          <span class="left-bar">模糊点</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">破裂点</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">恢复点</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">录入屈光档案医生的名字</span>
          <input type="text" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">调节幅度AMP(D)</h3>
      <p class="reference-tit">参考值：最小值：15-（0.25*年龄）</p>
      <ul class="list">
        <li>
          <span class="left-bar">OU</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">R </span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">L</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <h3 class="title">调节灵活度AF（c/m）</h3>
      <p class="reference-tit">参考值：双眼≥8单眼≥11双眼相差≤1</p>
      <ul class="list">
        <li>
          <span class="left-bar">OU</span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">R </span>
          <input type="number" class="input-group-lg" >
        </li>
        <li>
          <span class="left-bar">L</span>
          <input type="number" class="input-group-lg" >
        </li>
      </ul>
      <button class="btn btn-margin">确 认 添 加</button>
    </div>
  </div>
</template>

<script>
import { Datetime, Group } from 'vux'
export default {
  components: {
    Datetime,
    Group
  },
  data() {
    return {
      date: '2019-06-06'
    }
  },
  methods: {
    log(str1, str2 = '') {
      console.log(str1, str2)
    },
    onConfirm(val) {
      console.log('on-confirm arg', val)
      console.log('current value', this.value1)
    },
    change(value) {
      console.log('change', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .container{
    padding: 0rem .4rem 1rem;
  }
  .title{
    font-size: .36rem;
    padding-left: .1rem;
    border-left: 4px solid $bgBlueColor;
    text-align: left;
    margin-top: .44rem;
  }
  .list li{
    display: flex;
    justify-content: space-between;
    padding: .4rem 0 .12rem;
    border-bottom:1px solid $bColor
    font-size: .3rem;
  }
  .left-bar{
    line-height: .5rem;
  }
  .input-group-lg{
    width: 40%;
    text-align: right;
    font-size: .4rem;
  }
  .list >>> .weui-cell{
    // height: 100%;
  }
  .list >>> .vux-cell-box:not(:first-child):before{
    border-top: none;
  }
  .list >>> .vux-popup-picker-select{
    text-align: right !important;
  }
  .list >>> .weui-cell{
    padding: 0;
  }
  .list >>> .weui-cell_access .weui-cell__ft{
    height: .4rem;
  }
  .list >>> .weui-select{
    height: .4rem;
    line-height: .4rem;
    // padding-right: 0;
    font-size: .4rem;
  }
  .list >>> .weui-cell:before{
    border-top: none;
  }
  .list >>> .vux-selector.weui-cell_select{
    margin-right: -0.2rem;
  }
  select{
    direction: rtl;
  }
  .btn-margin{
    margin: 1rem 0;
  }
  .btn{
    btn()
    box-sizing: border-box;
  }
  .reference-tit{
    font-size: .24rem;
    color: #acacac;
    text-align: left;
    padding-top: .2rem;
  }
</style>
