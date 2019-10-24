<template>
  <div class="agreement-content">
    <div class="agreement-head text-center">
      <img :src="logo" alt="Logo img2x">
      <div v-if="traditional">
        <div class="agree-title">用戶註冊協議書</div>
        <div class="agree-title3">一、適用範圍</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 在您註冊本應用帳號時，您根據本應用要求提供的個人註冊信息；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 在您使用本應用網絡服務，或訪問本應用平臺網頁時，本應用自動接收並記錄的您的瀏覽器和計算機上的信息，包括但不限於您的IP地址、瀏覽器的類型、使用的語言、訪問日期和時間、軟硬件特征信息及您需求的網頁記錄等數據；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(c) 本應用通過合法途徑從商業夥伴處取得的用戶個人數據；</div>
        <div class="agree-title3">二、信息使用</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 本應用不會向任何無關第三方提供、出售、出租、分享或交易您的個人信息，除非事先得到您的許可，或該第三方和本應用（含本應用關聯公司）單獨或共同為您提供服務，且在該服務結束後，其將被禁止訪問包括其以前能夠訪問的所有這些資料；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 本應用亦不允許任何第三方以任何手段收集、編輯、出售或者無償傳播您的個人信息。任何本應用平臺用戶如從事上述活動，壹經發現，本應用有權立即終止與該用戶的服務協議；</div>
        <div class="agree-text">    (c) 為服務用戶的目的，本應用可能通過使用您的個人信息，向您提供您感興趣的信息，包括但不限於向您發出產品和服務信息，或者與本應用合作夥伴共享信息以便他們向您發送有關其產品和服務的信息（後者需要您的事先同意）;</div>
        <div class="agree-title3">三、信息披露</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;在如下情況下，本應用將依據您的個人意願或法律的規定全部或部分的披露您的個人信息：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 經您事先同意，向第三方披露；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 為提供您所要求的產品和服務，而必須和第三方分享您的個人信息；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(c) 根據法律的有關規定，或者行政或司法機構的要求，向第三方或者行政、司法機構披露；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(d) 如您出現違反中國有關法律、法規或者本應用服務協議或相關規則的情況，需要向第三方披露；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(e) 如您是適格的知識產權投訴人並已提起投訴，應被投訴人要求，向被投訴人披露，以便雙方處理可能的權利糾紛；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(f) 在本應用平臺上創建的某壹交易中，如交易任何壹方履行或部分履行了交易義務並提出信息披露請求的，本應用有權決定向該用戶提供其交易對方的聯絡方式等必要信息，以促成交易的完成或糾紛的解決；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(g) 其它本應用根據法律、法規或者網站政策認為合適的披露；</div>
        <div class="agree-title3">四、信息存儲和交換</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;本應用收集的有關您的信息和資料將保存在本應用及（或）其關聯公司的服務器上，這些信息和資料可能傳送至您所在國家、地區或本應用收集信息和資料所在地的境外並在境外被訪問、存儲和展示。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 在您未拒絕接受諾瞳健康APP的情況下，本應用會在您的計算機上設定或取用諾瞳健康APP，以便您能登錄或使用依賴於諾瞳健康APP的本應用平臺服務或功能。本應用使用諾瞳健康APP可為您提供更加周到的個性化服務，包括推廣服務；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 您有權選擇接受或拒絕接受諾瞳健康APP。您可以通過修改瀏覽器設置的方式拒絕接受諾瞳健康APP。但如果您選擇拒絕接受諾瞳健康APP，則您可能無法登錄或使用依賴於諾瞳健康APP的本應用網絡服務或功能；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(c) 通過本應用所設諾瞳健康APP所取得的有關信息，將適用本政策；</div>
        <div class="agree-title3">五、信息安全：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 本應用帳號均有安全保護功能，請妥善保管您的用戶名及密碼信息。本應用將通過對用戶密碼進行加密等安全措施確保您的信息不丟失，不被濫用和變造。盡管有前述安全措施，但同時也請您註意在信息網絡上不存在“完善的安全措施”；</div>
        <div class="agree-title3">如您對本政策或其他相關事宜有疑問，請通過400-778-0080與我們聯系。您也可將您的問題發送至akeso@com.cn或寄到如下地址：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;地址：北京市朝陽區日壇北路17號日壇國際貿易中心A座706</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;公司：北京艾索健康科技有限公司（收）</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;郵編：100000</div>
      </div>
      <div v-else>
        <div class="agree-title">用户注册协议书</div>
        <div class="agree-title3">一、适用范围</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 在您注册本应用帐号时，您根据本应用要求提供的个人注册信息；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 在您使用本应用网络服务，或访问本应用平台网页时，本应用自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(c) 本应用通过合法途径从商业伙伴处取得的用户个人数据；</div>
        <div class="agree-title3">二、信息使用</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 本应用不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和本应用（含本应用关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 本应用亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何本应用平台用户如从事上述活动，一经发现，本应用有权立即终止与该用户的服务协议；</div>
        <div class="agree-text">    (c) 为服务用户的目的，本应用可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本应用合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）;</div>
        <div class="agree-title3">三、信息披露</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;在如下情况下，本应用将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 经您事先同意，向第三方披露；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(d) 如您出现违反中国有关法律、法规或者本应用服务协议或相关规则的情况，需要向第三方披露；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(e) 如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(f) 在本应用平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，本应用有权决定向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(g) 其它本应用根据法律、法规或者网站政策认为合适的披露；</div>
        <div class="agree-title3">四、信息存储和交换</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;本应用收集的有关您的信息和资料将保存在本应用及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本应用收集信息和资料所在地的境外并在境外被访问、存储和展示。</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 在您未拒绝接受诺瞳健康APP的情况下，本应用会在您的计算机上设定或取用诺瞳健康APP，以便您能登录或使用依赖于诺瞳健康APP的本应用平台服务或功能。本应用使用诺瞳健康APP可为您提供更加周到的个性化服务，包括推广服务；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(b) 您有权选择接受或拒绝接受诺瞳健康APP。您可以通过修改浏览器设置的方式拒绝接受诺瞳健康APP。但如果您选择拒绝接受诺瞳健康APP，则您可能无法登录或使用依赖于诺瞳健康APP的本应用网络服务或功能；</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(c) 通过本应用所设诺瞳健康APP所取得的有关信息，将适用本政策；</div>
        <div class="agree-title3">五、信息安全：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;(a) 本应用帐号均有安全保护功能，请妥善保管您的用户名及密码信息。本应用将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”；</div>
        <div class="agree-title3">如您对本政策或其他相关事宜有疑问，请通过400-778-0080与我们联系。您也可将您的问题发送至akeso@com.cn或寄到如下地址：</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;地址：北京市朝阳区日坛北路17号日坛国际贸易中心A座706</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;公司：北京艾索健康科技有限公司（收）</div>
        <div class="agree-text">&nbsp;&nbsp;&nbsp;&nbsp;邮编：100000</div>
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
    line-height: 30px;
  }
  .agree-text {
    color: black;
    margin-top: 5px;
    font-size: 12px;
    line-height: 24px;
    text-align: left;
  }
</style>
