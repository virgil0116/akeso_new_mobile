<template>
  <div class="agreement-content">
    <div class="agreement-head text-center">
      <img :src="logo" alt="Logo img2x">
      <div v-if="traditional">
        <div class="agree-title">兒童近視環境及用眼習慣動態監測報告的智能篩查</div>
        <div class="agree-title">用戶設備租賃協議書</div>
        <div class="agree-title2">甲方：北京艾索健康科技有限公司</div>
        <div class="agree-title2">乙方：您</div>
        <div class="agree-title3">一、甲方權利與義務</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)甲方為乙方免費提供指定範圍內的產品試戴並出具兒童用眼健康行為風險分析篩查報告，並保證所提供產品為安全合格產品。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)檢查期間甲方有權向乙方詢問產品使用及用眼健康咨詢等相關問題。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(3)在乙方檢查期間，擁有該產品的合法使用所有權，如乙方在檢查期間鏡架損壞或在截止日期後不退還，甲方有權將所繳納押金及相關費用直接扣除，視為違約，包括但不限於該產品價款、產品折舊費等。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(4)檢查結束，甲方提供乙方壹份檢查期間的兒童眼健康數據分析報告及視光醫生的專業近視防控建議。</div>
        <div class="agree-title3">二、乙方權利與義務</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)檢查期間，乙方承擔妥善保管、合理使用產品職責，保證產品外觀完好、智能性能無損壞。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)乙方可在指定歸還日期內退還甲方產品，保證產品外觀、智能性能等相關完好無損，即可退還全額押金。</div>
        <div class="agree-title3">三、故障判定及責任區分</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;雙方應本著公平、互信的原則制定共同的產品質量判定標準，並依據執行，若有不盡之處，再友好協商判定。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)檢查期間，如發生產品本身質量問題，甲方負責維護並承擔相關費用。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)檢查期間，出現人為因素導致產品損壞，經檢測可維修且不影響再次使用的情況下，需要由乙方承擔維修費用及其他相關費用，但不扣除押金。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(3)檢查期間，出現人為因素導致產品損壞，經檢測不可維修的情況下，需要扣除乙方所付押金，並承擔其他相關費用。</div>
        <div class="agree-title3">四、出現以下情況，乙方按本合同押金的100%，即300元支付給甲方：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)將產品遺失、轉借、出租或贈與任何第三方使用，或用做其他商業用途。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)檢查產品出現明顯人為原因造成的破壞且無法維修；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(3)超過檢查預定日期3天未將產品歸還給甲方。</div>
      </div>
      <div v-else>
        <div class="agree-title">儿童近视环境及用眼习惯动态监测报告的智能筛查</div>
        <div class="agree-title">用户设备租赁协议书</div>
        <div class="agree-title2">甲方：北京艾索健康科技有限公司</div>
        <div class="agree-title2">乙方：您</div>
        <div class="agree-title3">一、甲方权利与义务</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)甲方为乙方免费提供指定范围内的产品试戴并出具儿童用眼健康行为风险分析筛查报告，并保证所提供产品为安全合格产品。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)检查期间甲方有权向乙方询问产品使用及用眼健康咨询等相关问题。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(3)在乙方检查期间，拥有该产品的合法使用所有权，如乙方在检查期间镜架损坏或在截止日期后不退还，甲方有权将所缴纳押金及相关费用直接扣除，视为违约，包括但不限于该产品价款、产品折旧费等。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(4)检查结束，甲方提供乙方一份检查期间的儿童眼健康数据分析报告及视光医生的专业近视防控建议。</div>
        <div class="agree-title3">二、乙方权利与义务</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)检查期间，乙方承担妥善保管、合理使用产品职责，保证产品外观完好、智能性能无损坏。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)乙方可在指定归还日期内退还甲方产品，保证产品外观、智能性能等相关完好无损，即可退还全额押金。</div>
        <div class="agree-title3">三、故障判定及责任区分</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;双方应本着公平、互信的原则制定共同的产品质量判定标准，并依据执行，若有不尽之处，再友好协商判定。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)检查期间，如发生产品本身质量问题，甲方负责维护并承担相关费用。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)检查期间，出现人为因素导致产品损坏，经检测可维修且不影响再次使用的情况下，需要由乙方承担维修费用及其他相关费用，但不扣除押金。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(3)检查期间，出现人为因素导致产品损坏，经检测不可维修的情况下，需要扣除乙方所付押金，并承担其他相关费用。</div>
        <div class="agree-title3">四、出现以下情况，乙方按本合同押金的100%，即300元支付给甲方：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(1)将产品遗失、转借、出租或赠与任何第三方使用，或用做其他商业用途。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(2)检查产品出现明显人为原因造成的破坏且无法维修；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(3)超过检查预定日期3天未将产品归还给甲方。</div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/image/agreements/logo2x.png'
export default {
  data() {
    return {
      logo,
      traditional: false
    }
  },
  created() {
    // console.log('aaaaaaaa => ', this.$route.query.lang)
    this.traditional = this.$route.query.lang === 'hk'
  }
}
</script>
<style>
  .agreement-content {
    padding: 20px;
  }
  h3 {
    font-weight: bold;
  }
  .text-center {
    text-align: center;
  }
  .agree-title {
    color: black;
    margin: 20px 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .agree-title2 {
    color: black;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
  }
  .agree-title3 {
    color: black;
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
  }
  .agree-text {
    color: black;
    margin-top: 5px;
    font-size: 12px;
    line-height: 24px;
    text-align: left;
  }
</style>
