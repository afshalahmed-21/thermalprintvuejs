<template>
   <div id="invoice-POS">
    <p class="textcenter maintilte">إشعار دائن للفاتورة الضريبية المبسطة</p>
    <center id="top" class="paddingX">
      <div class="info">
        <h2 class="infoh2 pl14">اسم المتجر</h2>
        <p class="infoPara pl14">رﻮــــﺴـــﻛ</p>
      </div>
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="info textRight">
        <h2 class="infoh2 pl14"># رقم المرتجع</h2>
        <p class="infoPara pl14" id="i5"></p>
      </div>
      <!--End Info-->
    </center>
    <div class="border-bottom"></div>
    <!--End InvoiceTop-->
    <div class="paddingX">
      <div id="mid" class="">
        <div class="borderRight textRight wid50 pr">
          <p class="infoh2mid mb5">
            <span id="i10">001324956223333</span> : الرقم الضريبي
          </p>
          <p class="infoh2mid mb5">الفرع :<span id="i144"></span></p>
          <p class="infoh2mid mb5">المدينة :<span id="i18"></span></p>
          <p class="infoh2mid mb5">الحي: <span id="i22"></span></p>
          <p class="infoh2mid mb5">
            23236<span id="i24"></span> : الرمز البريدي
          </p>
          <p class="infoh2mid mb5">
            6X XXX XX <span id="i28"></span> : رقم التليفون
          </p>
          <p class="infoh2mid mb5">
            05XXXXXXXX <span id="i31"></span> : رقم الجوال
          </p>
        </div>
        <div class="textRight wid50">
          <p class="infoh2mid mb5">#<span id="i60"></span> : رقم الفاتورة</p>
          <p class="infoh2mid mb5"><span id="i8"></span> : تاريخ الإصدار</p>
          <p class="infoh2mid mb10"><span id="i12"></span> : وقت الإصدار</p>
          <p class="infoh2mid mb10">
            اسم العميل : <span id="i16"></span>محمد عبدالله
          </p>
          <p class="infoh2mid mb10">
            : الرقم الضريبي للعميل

            <br />
            <span>001324956223333</span> <span id="i20"></span>
          </p>
          <p class="infoh2mid mb10">
            عنوان العميل : <span id="i26"></span> محمد عبدالله
          </p>

          <p class="infoh2mid mb10 notes">
            <span id="i29"> </span> هو ببساطة نص شكلي يستخدم في صناعة الطباعة
            والتنضيد. كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة منذ
            القرن الخامس عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من
            النوع وتدافعت عليه لعمل كتاب عينة. لقد صمد ليس فقط لخمسة قرون ، ولكن
            أيضًا القفزة في التنضيد الإلكتروني ، وظل دو في التنضيد الإلكتروني ،
            وظل دو في التنضيد الإلكتروني ، وظل دو في التنضيد الإلكتروني ، وظل دو
            في التنضيد الإلكتروني ، وظل دو في التنضيد الإلكتروني ، وظل دو في
            التنضيد الإلكتروني ، وظل دو في التنضيد الإلكتروني ، وظل دو في
            التنضيد الإلكتروني ، وظل دو في التنضيد الإلكتروني ، وظل دون تغيير
            جوهري. كان
          </p>
        </div>
      </div>
    </div>
    <div class="border-bottom"></div>
    <!--End Invoice Mid-->

    <div id="bot">
      <div id="table">
        <table>
          <tr class="tabletitle textcenter">
            <td class="item">
              <h2>
                إجمالي المبلغ
                <br />
                <span class="shamil">(شامل الضريبة)</span>
              </h2>
            </td>
            <td class="Hours">
              <h2>سعر الوحدة</h2>
            </td>
            <td class="Rate">
              <h2>الكمية</h2>
            </td>
            <td class="Rate">
              <h2>الصنف</h2>
            </td>
          </tr>

          <tr class="service textcenter">
            <td class="tableitem">
              <p class="itemtext fontroboto"><span id="i39"></span></p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto"><span id="i38"></span></p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto"><span id="i37"></span></p>
            </td>
            <td class="tableitem">
              <p class="itemtext">
                <span id="i36a"></span>
                <br />
                <span id="i36b"></span>
              </p>
            </td>
          </tr>

          <tr class="service textcenter">
            <td class="tableitem">
              <p class="itemtext fontroboto">402.50</p>
            </td>
            <td class="tableitem fontroboto">
              <p class="itemtext">350.00</p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto">1</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">
                ب ﺮﺼﻨﻋ
                <br />
                9263496333
              </p>
            </td>
          </tr>
          <tr class="service textcenter">
            <td class="tableitem">
              <p class="itemtext fontroboto">115.00</p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto">100.00</p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto">1</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">
                س ﺮﺼﻨﻋ
                <br />
                22346152
              </p>
            </td>
          </tr>
          <tr class="service textcenter">
            <td class="tableitem">
              <p class="itemtext fontroboto">115.00</p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto">100.00</p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto">1</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">
                س ﺮﺼﻨﻋ
                <br />
                22346152
              </p>
            </td>
          </tr>
          <tr class="service textcenter">
            <td class="tableitem">
              <p class="itemtext fontroboto">115.00</p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto">100.00</p>
            </td>
            <td class="tableitem">
              <p class="itemtext fontroboto">1</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">
                س ﺮﺼﻨﻋ
                <br />
                22346152
              </p>
            </td>
          </tr>
        </table>
      </div>
      <!--End Table-->
    </div>

    <div class="border-bottom"></div>
    <!--End InvoiceBot-->
    <div class="paddingX">
      <div id="mid2">
        <div class="textRight pr15">
          <p class="infoh2mid mb5">
            <span class="infoh2midbtn mb5 border-1">1</span>
          </p>

          <p class="infoh2mid mb5"><span id="i43"></span></p>
          <p class="infoh2mid mb5"><span id="i45"></span></p>
          <p class="infoh2mid mb5">
            <strong><span id="i47"></span> </strong>
          </p>
        </div>
        <div class="textRight">
          <p class="infoh2mid mb5">إجمالي الكميات</p>
          <p class="infoh2mid mb5">إجمالي المبلغ (غير شامل الضريبة)</p>
          <p class="infoh2mid mb5">مجموع ضريبة القيمة المضافة</p>
          <p class="infoh2mid mb5 textblack">
            <strong> إجمالي المبلغ المستحق </strong>
          </p>
        </div>
      </div>
    </div>

    <div class="border-bottom"></div>

    <div class="paddingX">
      <div id="mid3">
        <div class="textRight pr15">
          <p class="infoh2mid">
            <strong> <span id="i53"> محمد خالد </span></strong>
          </p>
        </div>
        <div class="textRight">
          <p class="infoh2mid"><strong> أصدرت بواسطة</strong></p>
        </div>
      </div>
    </div>

    <div class="paddingX">
      <div id="mid3">
        <div class="textRight pr15">
          <p class="infoh2mid">
            <span class="infoh2midbtn border-1" id="i55">1</span>
          </p>
        </div>
        <div class="textRight">
          <p class="infoh2mid"><strong> رقم الكاشير</strong></p>
        </div>
      </div>
    </div>
    <div class="qrcodediv">
      <div class="qrcodehere">
        <img src="../assets/invoiceqr.png" alt="" class="qrImage" />
      </div>
    </div>
  </div>
</template>




<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,500;1,700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap");
* {
  font-family: "Almarai";

  box-sizing: border-box;
}
body {
  background-color: black;
}
.fontroboto {
  font-family: "Roboto", sans-serif !important;
}
.paddingX {
  padding: 0 30px;
}
.shamil {
  font-weight: 300 !important;
  font-size: 23px;
}
.item h2 {
  font-weight: normal !important;
  font-size: 28px;
}
.Hours h2 {
  font-weight: normal !important;
  font-size: 28px;
}
.Rate h2 {
  font-weight: normal !important;
  font-size: 28px;
}
.border-bottom {
  border-bottom: 2px solid rgba(44, 44, 44, 0.3);
  width: 98%;
  margin: 0 auto;
}
#invoice-POS {
  /* box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5); */
  /* background-color: aliceblue; */
  /* padding: 30px; */
  margin: 0 auto;
  max-width: 900px;
  background: white;
}
.textcenter {
  text-align: center;
}
.textRight {
  text-align: right;
}

#invoice-POS ::selection {
  background: #f31544;
  color: #fff;
}
#invoice-POS ::moz-selection {
  background: #f31544;
  color: #fff;
}

#invoice-POS #top,
#invoice-POS #mid,
#mid2,
#invoice-POS #bot {
  /* Targets all id with 'col-' */
  /* border-bottom: 2px solid rgba(44, 44, 44, 0.3); */
}
#invoice-POS #top {
  min-height: 66px;
  padding-bottom: 23px;
}
#invoice-POS #mid {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  /* grid-template-columns: 3fr 3fr; */
  /* background-color: #2196f3; */
  /* min-height: 80px; */
}
#mid2 {
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
#mid3 {
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 10px 0;
}
.mb5 {
  margin-bottom: 18px;
}
.mb10 {
  margin-bottom: 40px;
}
#invoice-POS #bot {
  min-height: 50px;
}
.logo img {
  margin-left: 19px;
  height: 140px;
  width: 134px;
  /* background: url(http://michaeltruong.ca/images/logo1.png) no-repeat;
    background-size: 60px 60px; */
}
#top {
  display: flex;
  justify-content: space-between;
}
#invoice-POS .clientlogo {
  float: left;
  height: 60px;
  width: 60px;
  background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;
  background-size: 60px 60px;
  border-radius: 50px;
}
.maintilte {
  padding-top: 26px;
  font-size: 40px;
  font-weight: 700;
}
.infoh2mid {
  font-weight: normal;
  font-size: 28px;
  /* line-height: 18%; */
  color: rgb(0 0 0);
}
.border-1 {
  border: 1.5px solid #2c2c2c;
}
.infoh2midbtn {
  padding: 3px 48px;
  width: 25px;
  font-size: 28px;
  border-radius: 10px;
}
.textblack {
  color: black !important;
}
.qrcodediv {
  display: flex;
  justify-content: center;
  align-items: center;
}
.qrcodehere {
  width: 60%;
  height: 520px;
  /*background-color: black;*/
}
.qrcodehere img {
  width: 100%;
  height: 100%;
}
.borderRight {
  border-right: 2px solid rgba(44, 44, 44, 0.3);
}
.infoh2 {
  font-weight: 300;
  font-size: 32px;
  line-height: 18%;
  color: #2c2c2c !important;
}
.infoPara {
  font-weight: 700;
  font-size: 32px;
  line-height: 37%;
  /* display: flex; */
  /* align-items: center; */
  /* text-align: center; */
  color: #2c2c2c;
}
#invoice-POS .title {
  float: right;
}
#invoice-POS .title p {
  text-align: right;
}
#invoice-POS table {
  width: 100%;
  border-collapse: collapse;
}
#invoice-POS .tabletitle {
  font-size: 14px;
  font-weight: 100;
  /* background: #eee; */
}
#invoice-POS .service {
  /* border-bottom: 1px solid #eee;
   */
}
/* #invoice-POS .item {
  width: 24mm;
} */
#invoice-POS .itemtext {
  margin: 7px 0;
  font-weight: 300;
  font-size: 28px;
  color: #2c2c2c;
}
#invoice-POS #legalcopy {
  margin-top: 5mm;
}
.notes {
  /* width: 400px; */
  /* background-color: red; */
  word-break: break-all;
  padding: 0 0 0 16px;
}
.wid50 {
  width: 50%;
}
.pr {
  padding-right: 15px;
}
.qrImage {
  max-width: 100%;
  height: 100%;
}
.pr15 {
  padding-right: 15px;
}
.pl14 {
  padding-left: 14px;
}
@media print {
  .maintilte {
    padding-top: 26px;
    font-size: 22px;
    font-weight: 700;
  }
  .infoh2 {
    font-weight: 300;
    font-size: 12px;
    line-height: 18%;
    color: #2c2c2c !important;
  }
  .infoPara {
    font-weight: 700;
    font-size: 12px;
    line-height: 37%;
    /* display: flex; */
    /* align-items: center; */
    /* text-align: center; */
    color: #2c2c2c;
  }
  .logo img {
    margin-left: 19px;
    height: 40px;
    width: 40px;
  }
  .mb10 {
    margin-bottom: 20px;
  }
  .infoh2mid {
    font-weight: normal;
    font-size: 12px;
    /* line-height: 18%; */
    color: rgb(0 0 0);
  }
  .Rate h2 {
    font-weight: normal !important;
    font-size: 14px;
  }
  .Hours h2 {
    font-weight: normal !important;
    font-size: 14px;
  }
  .shamil {
    font-weight: 300 !important;
    font-size: 14px;
  }
  .item h2 {
    font-weight: normal !important;
    font-size: 14px;
  }
  #invoice-POS .itemtext {
    margin: 7px 0;
    font-weight: 300;
    font-size: 12px;
    color: #2c2c2c;
  }
  .infoh2midbtn {
    padding: 3px 24px;
    width: 25px;
    font-size: 12px;
    border-radius: 5px;
  }
  .qrcodehere {
    width: 60%;
    height: 200px;
    background-color: black;
  }
  .paddingX {
    padding: 0 5px;
  }
  #invoice-POS {
    /* box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5); */
    /* background-color: aliceblue; */
    /* padding: 30px; */
    /* margin: 0 auto; */
    max-width: 100%;
    background: white;
  }

  /* #invoice-POS>div:last-child {
      page-break-before: always
  } */
}
</style>