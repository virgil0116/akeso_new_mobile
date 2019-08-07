<template>
  <div class="agreement-content">
    <div class="agreement-head text-center">
      <img :src="logo" alt="Logo img2x">
      <div v-if="traditional">
        <div class="agree-title">
          隱私權政策
        </div>
        <div class="agree-des">
          親愛的客戶，您個人的隱私權，AKESO Eyecare Ltd. 北京艾索健康科技有限公司絕對尊重並予以保護。為了幫助您瞭解，AKESO Eyecare Ltd. 北京艾索健康科技有限公司如何蒐集、應用及保護您所提供的個人資訊，請您詳細閱讀 AKESO Eyecare Ltd. 北京艾索健康科技有限公司的隱私權保護政策 (Privacy Policy)。這份文件將告訴您 ，AKESO Eyecare Ltd. 北京艾索健康科技有限公司在旗下網站蒐集的資料、運用方式，以及我們的隱私權保護政策。
        </div>
        <div class="agree-title2">
          一、本網站個人資料之蒐集政策
        </div>
        <div class="agree-des">
          根據 AKESO Eyecare Ltd. 北京艾索健康科技有限公司所提供的不同服務，向使用者
          蒐集個人資料:線上活動及網路調查當您參與線上活動或調查時，AKESO Eyecare Ltd. 北京艾索健康科技有限公司會請您提供電話、e-mail 及住址等。
        </div>
        <div class="agree-title2">
          二、登錄網站
        </div>
        <div class="agree-des">
          當您在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司進行網站認證時，我們因作 業需求，將保留您客戶名稱、營利證號、電話、e-mail 及住址等資料。
        </div>
        <div class="agree-title2">
          三、內容服務
        </div>
        <div class="agree-des">
          當您註冊成為 AKESO Eyecare Ltd. 北京艾索健康科技有限公司旗下網站之會員時， 根據網站提供服務性質不同，本網站會請您提供個人資訊，包括姓名、暱稱、身分 證字號、電話、電子信箱或地址等身份識別資料。
        </div>
        <div class="agree-des">
          其他除了上述，AKESO Eyecare Ltd. 北京艾索健康科技有限公司會保留您在上網瀏覽 或查詢時，伺服器自行產生的相關記錄，包括您使用連線設備的 IP 位址、使用時 間、使用的瀏覽器、瀏覽及點選資料紀錄等。AKESO Eyecare Ltd. 北京艾索健康科技 有限公司會對個別連線者的瀏覽器予以標示，歸納使用者瀏覽器在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司內部所瀏覽的網頁，除非您願意告知你的個人資料， 否則 AKESO Eyecare Ltd. 北京艾索健康科技有限公司不會，也無法將此項記錄和您 對應。請您注意，在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司刊登廣告之廠 商，或與 AKESO Eyecare Ltd. 北京艾索健康科技有限公司連結的網站，也可能蒐集
          您個人的資料。對於您主動提供的個人資訊，這些廣告廠商、或連結網站有其個別 的私權保護政策，其資料處理措施不適用 AKESO Eyecare Ltd. 北京艾索健康科技有 限公司隱私權保護政策，AKESO Eyecare Ltd. 北京艾索健康科技有限公司不負任何連 帶責任。
        </div>
        <div class="agree-title2">
          四、上述蒐集資料之運用政策
        </div>
        <div class="agree-des">
          當您在本網站主動註冊成為會員後，其所輸入的資料，僅供本網站依服務或活動設 計參考使用。凡未經您主動註冊所產生的資料，例如使用者機器的 IP 位址、使用時 間、使用的瀏覽器、瀏覽及點選紀錄等資料，本網站僅對全體使用者行為總和進行 分析，並不會對個別使用者進行分析。
        </div>
        <div class="agree-title2">
          五、AKESO Eyecare Ltd. 北京艾索健康科技有限公司與第三者共用個人資料之政策
        </div>
        <div class="agree-des">
          AKESO Eyecare Ltd. 北京艾索健康科技有限公司資廚管理顧問股份有限公司絕不會任 意出售、交換、或出租任何您的個人資料給其他團體或個人 。以下兩種狀況， AKESO Eyecare Ltd. 北京艾索健康科技有限公司會在本政策原則之下，與第三者共用
          您的個人資料。
        </div>
        <div class="agree-des">
          為了提供您其他服務或優惠權益 (例如折價券)，需要與提供該服務或優惠之第三者 共用您的資料時，AKESO Eyecare Ltd. 北京艾索健康科技有限公司會在活動時提供充 分說明，並且在資料蒐集之前通知您，您可以自由選擇是否接受這項特定服務或優 惠。
        </div>
        <div class="agree-des">
          司法單位因公眾安全，要求 AKESO Eyecare Ltd. 北京艾索健康科技有限公司公開特 定個人資料時， AKESO Eyecare Ltd. 北京艾索健康科技有限公司將視司法單位元合 法正式的程式，以及對 AKESO Eyecare Ltd. 北京艾索健康科技有限公司所有使用者 安全考量下做可能必要的配合。
        </div>
        <div class="agree-title2">
          六、AKESO Eyecare Ltd. 北京艾索健康科技有限公司傳送商業資訊或電子郵件之政策
        </div>
        <div class="agree-des">
          AKESO Eyecare Ltd. 北京艾索健康科技有限公司將在事前或註冊登錄取得您的同意 後，傳送商業性資料或電子郵件給您。AKESO Eyecare Ltd. 北京艾索健康科技有限公 司除了在該資料或電子郵件上註明是由 AKESO Eyecare Ltd. 北京艾索健康科技有限 公司發送，也會在該資料或電子郵件上提供您能隨時停止接收這些資料或電子郵件 的方法、說明或功能連絡。
        </div>
        <div class="agree-title2">
          七、自我保護措施
        </div>
        <div class="agree-des">
          請妥善保管您的密碼及或任何個人資料，不要將任何個人資料，尤其是密碼提供給 任何人。在您完成後台登入、取閱電子郵件等程式後，務必記得登出帳戶，若您是 與他人共用電腦或使用公共電腦，切記要關閉瀏覽器視窗，以防止他人讀取您的個 人資料或信件。
        </div>
        <div class="agree-title2">
          八、AKESO Eyecare Ltd. 北京艾索健康科技有限公司隱私權保護政策諮詢
        </div>
        <div class="agree-des">
          若您對自己在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司網站中的隱私權有任何問題，請洽詢 AKESO Eyecare Ltd. 北京艾索健康科技有限公司服務信箱及客服電郵 Email: info@akeso.com.hk。
        </div>
        <div class="agree-title2">
          九、免責聲明
        </div>
        <div class="agree-des">
          雖然本司致力確保此網站內所有資料及內容之準確及適時性，此網站純粹為了方便電
          腦用者使用，但本司不作任何擔保。網站內所有資料及內容可能隨時更改而不作另行
          通知。
        </div>
        <div class="agree-des">
          本網站可能連結到其他網站之內容、服務、商品及廣告，此並非可由AKESO Eyecare Ltd.維護或控制者，因此，養和醫院對本網站可能連結到的其他網站、服務及商品之供應，以及其內容或其準確性，概不負責。
        </div>
        <div class="agree-des">
          網上預約系統只為已購買智能眼鏡或在有銷售產品的店舖作預約醫療服務之用。填寫AKESO Eyecare Ltd.或授權之店舖(客 戶在申請帳戶時或購買智能產品時須要明白清楚有關閣下個人資料有機會轉移相關單位或用途)及提交網上預約表格並不保證閣下之預約時間。將處理閣下的申請，並以電郵、電話或短訊就預約結果聯絡閣下，或就所預約的日期及時間之任何改動聯絡你。AKESO Eyecare Ltd.對透過此網上系統作預約申請未能如願而引致的任何後果，概不負責。 在此網站提交的預約申請只作排期用途。提交網上預約表格表示閣下同意受本網站有關網上預約系統的免責聲明約束。
        </div>
      </div>
      <div v-else>
        <div class="agree-title">
          隐私权政策
        </div>
        <div class="agree-des">
          亲爱的客户，您个人的隐私权，AKESO Eyecare Ltd. 北京艾索健康科技有限公司绝对尊重并予以保护。为了帮助您瞭解，AKESO Eyecare Ltd. 北京艾索健康科技有限公司如何蒐集、应用及保护您所提供的个人资讯，请您详细阅读 AKESO Eyecare Ltd. 北京艾索健康科技有限公司的隐私权保护政策 (Privacy Policy)。这份文件将告诉您 ，AKESO Eyecare Ltd. 北京艾索健康科技有限公司在旗下网站蒐集的资料、运用方式，以及我们的隐私权保护政策。
        </div>
        <div class="agree-title2">
          一、本网站个人资料之蒐集政策
        </div>
        <div class="agree-des">
          根据 AKESO Eyecare Ltd. 北京艾索健康科技有限公司所提供的不同服务，向使用者
          蒐集个人资料:线上活动及网路调查当您参与线上活动或调查时，AKESO Eyecare Ltd. 北京艾索健康科技有限公司会请您提供电话、e-mail 及住址等。
        </div>
        <div class="agree-title2">
          二、登录网站
        </div>
        <div class="agree-des">
          当您在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司进行网站认证时，我们因作 业需求，将保留您客户名称、营利证号、电话、e-mail 及住址等资料。
        </div>
        <div class="agree-title2">
          三、内容服务
        </div>
        <div class="agree-des">
          当您注册成为 AKESO Eyecare Ltd. 北京艾索健康科技有限公司旗下网站之会员时， 根据网站提供服务性质不同，本网站会请您提供个人资讯，包括姓名、暱称、身分 证字号、电话、电子信箱或地址等身份识别资料。
        </div>
        <div class="agree-des">
          其他除了上述，AKESO Eyecare Ltd. 北京艾索健康科技有限公司会保留您在上网浏览 或查询时，伺服器自行产生的相关记录，包括您使用连线设备的 IP 位址、使用时 间、使用的浏览器、浏览及点选资料纪录等。AKESO Eyecare Ltd. 北京艾索健康科技 有限公司会对个别连线者的浏览器予以标示，归纳使用者浏览器在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司内部所浏览的网页，除非您愿意告知你的个人资料， 否则 AKESO Eyecare Ltd. 北京艾索健康科技有限公司不会，也无法将此项记录和您 对应。请您注意，在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司刊登广告之厂 商，或与 AKESO Eyecare Ltd. 北京艾索健康科技有限公司连结的网站，也可能蒐集
          您个人的资料。对于您主动提供的个人资讯，这些广告厂商、或连结网站有其个别 的私权保护政策，其资料处理措施不适用 AKESO Eyecare Ltd. 北京艾索健康科技有 限公司隐私权保护政策，AKESO Eyecare Ltd. 北京艾索健康科技有限公司不负任何连 带责任。
        </div>
        <div class="agree-title2">
          四、上述蒐集资料之运用政策
        </div>
        <div class="agree-des">
          当您在本网站主动注册成为会员后，其所输入的资料，仅供本网站依服务或活动设 计参考使用。凡未经您主动注册所产生的资料，例如使用者机器的 IP 位址、使用时 间、使用的浏览器、浏览及点选纪录等资料，本网站仅对全体使用者行为总和进行 分析，并不会对个别使用者进行分析。
        </div>
        <div class="agree-title2">
          五、AKESO Eyecare Ltd. 北京艾索健康科技有限公司与第三者共用个人资料之政策
        </div>
        <div class="agree-des">
          AKESO Eyecare Ltd. 北京艾索健康科技有限公司资厨管理顾问股份有限公司绝不会任 意出售、交换、或出租任何您的个人资料给其他团体或个人 。以下两种状况， AKESO Eyecare Ltd. 北京艾索健康科技有限公司会在本政策原则之下，与第三者共用
          您的个人资料。
        </div>
        <div class="agree-des">
          为了提供您其他服务或优惠权益 (例如折价券)，需要与提供该服务或优惠之第三者 共用您的资料时，AKESO Eyecare Ltd. 北京艾索健康科技有限公司会在活动时提供充 分说明，并且在资料蒐集之前通知您，您可以自由选择是否接受这项特定服务或优 惠。
        </div>
        <div class="agree-des">
          司法单位因公众安全，要求 AKESO Eyecare Ltd. 北京艾索健康科技有限公司公开特 定个人资料时， AKESO Eyecare Ltd. 北京艾索健康科技有限公司将视司法单位元合 法正式的程式，以及对 AKESO Eyecare Ltd. 北京艾索健康科技有限公司所有使用者 安全考量下做可能必要的配合。
        </div>
        <div class="agree-title2">
          六、AKESO Eyecare Ltd. 北京艾索健康科技有限公司传送商业资讯或电子邮件之政策
        </div>
        <div class="agree-des">
          AKESO Eyecare Ltd. 北京艾索健康科技有限公司将在事前或注册登录取得您的同意 后，传送商业性资料或电子邮件给您。AKESO Eyecare Ltd. 北京艾索健康科技有限公 司除了在该资料或电子邮件上注明是由 AKESO Eyecare Ltd. 北京艾索健康科技有限 公司发送，也会在该资料或电子邮件上提供您能随时停止接收这些资料或电子邮件 的方法、说明或功能连络。
        </div>
        <div class="agree-title2">
          七、自我保护措施
        </div>
        <div class="agree-des">
          请妥善保管您的密码及或任何个人资料，不要将任何个人资料，尤其是密码提供给 任何人。在您完成后台登入、取阅电子邮件等程式后，务必记得登出帐户，若您是 与他人共用电脑或使用公共电脑，切记要关闭浏览器视窗，以防止他人读取您的个 人资料或信件。
        </div>
        <div class="agree-title2">
          八、AKESO Eyecare Ltd. 北京艾索健康科技有限公司隐私权保护政策谘询
        </div>
        <div class="agree-des">
          若您对自己在 AKESO Eyecare Ltd. 北京艾索健康科技有限公司网站中的隐私权有任何问题，请洽询 AKESO Eyecare Ltd. 北京艾索健康科技有限公司服务信箱及客服电邮 Email: info@akeso.com.hk。
        </div>
        <div class="agree-title2">
          九、免责声明
        </div>
        <div class="agree-des">
          虽然本司致力确保此网站内所有资料及内容之准确及适时性，此网站纯粹为了方便电
          脑用者使用，但本司不作任何担保。网站内所有资料及内容可能随时更改而不作另行
          通知。
        </div>
        <div class="agree-des">
          本网站可能连结到其他网站之内容、服务、商品及广告，此并非可由AKESO Eyecare Ltd.维护或控制者，因此，养和医院对本网站可能连结到的其他网站、服务及商品之供应，以及其内容或其准确性，概不负责。
        </div>
        <div class="agree-des">
          网上预约系统只为已购买智能眼镜或在有销售产品的店舖作预约医疗服务之用。填写AKESO Eyecare Ltd.或授权之店舖(客 户在申请帐户时或购买智能产品时须要明白清楚有关阁下个人资料有机会转移相关单位或用途)及提交网上预约表格并不保证阁下之预约时间。将处理阁下的申请，并以电邮、电话或短讯就预约结果联络阁下，或就所预约的日期及时间之任何改动联络你。AKESO Eyecare Ltd.对透过此网上系统作预约申请未能如愿而引致的任何后果，概不负责。 在此网站提交的预约申请只作排期用途。提交网上预约表格表示阁下同意受本网站有关网上预约系统的免责声明约束。
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
