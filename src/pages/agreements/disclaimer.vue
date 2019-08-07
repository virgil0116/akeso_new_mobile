<template>
  <div class="agreement-content">
    <div class="agreement-head text-center">
      <img :src="logo" alt="Logo img2x">
      <div v-if="traditional">
        <div class="agree-title">
          免責聲明
        </div>
        <div class="agree-des">
          雖然本司致力確保此網站內所有資料及內容之準確及適時性，此網站純粹為了方便電腦用者使用，但本司不作任何擔保。網站內所有資料及內容可能隨時更改而不作另行通知。
        </div>
        <div class="agree-des">
          本網站可能連結到其他網站之內容、服務、商品及廣告，此並非可由AKESO Eyecare Ltd.維護或控制者，因此，養和醫院對本網站可能連結到的其他網站、服務及商品之供應，以及其內容或其準確性，概不負責。
        </div>
        <div class="agree-des">
          網上預約系統只為已購買智能眼鏡或在有銷售產品的店舖作預約醫療服務之用。填寫AKESO Eyecare Ltd.或授權之店舖(客 戶在申請帳戶時或購買智能產品時須要明白清楚有關閣下個人資料有機會轉移相關單位或用途)及提交網上預約表格並不保證閣下之預約時間。AKESO Eyecare將處理閣下的申請，並以電郵、電話或短訊就預約結果聯絡閣下，或就所預約的日期及時間之任何改動聯絡你。AKESO Eyecare Ltd.對透過此網上系統作預約申請未能如願而引致的任何後果，概不負責。 在此網站提交的預約申請只作排期用途。提交網上預約表格表示閣下同意受本網站有關網上預約系統的免責聲明約束。
        </div>
      </div>
      <div v-else>
        <div class="agree-title">
          免责声明
        </div>
        <div class="agree-des">
          虽然本司致力确保此网站内所有资料及内容之准确及适时性，此网站纯粹为了方便电脑用者使用，但本司不作任何担保。网站内所有资料及内容可能随时更改而不作另行通知。
        </div>
        <div class="agree-des">
          本网站可能连结到其他网站之内容、服务、商品及广告，此并非可由AKESO Eyecare Ltd.维护或控制者，因此，养和医院对本网站可能连结到的其他网站、服务及商品之供应，以及其内容或其准确性，概不负责。
        </div>
        <div class="agree-des">
          网上预约系统只为已购买智能眼镜或在有销售产品的店舖作预约医疗服务之用。填写AKESO Eyecare Ltd.或授权之店舖(客 户在申请帐户时或购买智能产品时须要明白清楚有关阁下个人资料有机会转移相关单位或用途)及提交网上预约表格并不保证阁下之预约时间。AKESO Eyecare将处理阁下的申请，并以电邮、电话或短讯就预约结果联络阁下，或就所预约的日期及时间之任何改动联络你。AKESO Eyecare Ltd.对透过此网上系统作预约申请未能如愿而引致的任何后果，概不负责。 在此网站提交的预约申请只作排期用途。提交网上预约表格表示阁下同意受本网站有关网上预约系统的免责声明约束。
        </div>
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
  .text-center {
    text-align: center;
  }
  .agree-title {
    margin: 20px 20px;
    font-size: 32px;
    font-weight: bold;
  }
  .agree-des {
    margin-top: 10px;
    font-size: 18px;
    text-align: left;
    color: #90959a;
  }
  .agree-title2 {
    margin-top: 10px;
    font-size: 24px;
    text-align: left;
  }
</style>
