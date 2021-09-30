import "../response.css";
import logo from "../images/logo with R.png";
import logoBg from "../images/3.png";
import bg1 from "../images/2.png";
import bg2 from "../images/1.png";
import Footer from "./footer";
import img1 from "../images/right1.png";
import img2 from "../images/right2.png";

function response() {
  return (
    <div className="top-container">
      <img className="top-b" src={bg2} alt="A piece of paper" />
      <div className="center-b-container">
        <img className="center-b" src={bg1} alt="A piece of paper" />
      </div>
      <div className="container">
        <img className="logo-back" src={logoBg} alt="Logo" />
        <img className="main-logo" src={logo} alt="Logo" />
      </div>

      <div className="answer an0">
        <div className="res-container">
          <h1 className="header">
            للأسف، ليست هذه المستندات <br /> المطلوبة لتحرير ابو جميل
          </h1>

          <p>لا تستلم ابو جميل يحتاج إلى مساعدتك</p>
          <p className="last">إذا اردت تلميح اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an1">
        <div className="res-container">
          <h1 className="header">
            للأسف، ليست هذه المستندات <br /> المطلوبة لتحرير ابو جميل
          </h1>
          <p>
            لكنك حصلت على واحد منهم بشكل صحيح. التزم بها، فأنت قريب وابو جميل
            بحاجة إلى مساعدتك!
          </p>
          <p className="last">إذا اردت تلميح اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".hint1").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="answer an2">
        <div className="res-container">
          <h1>لقد اثبت براءة ابو جميل!</h1>
          <h2>عمل رائع، يمكنك الأن فتح الملف الاضافي الاول</h2>
          <div className="images">
            <div>
              <img src={img2} alt="مقاله" />
              <p>
                الجهة الاخرى من مقال مقتل
                <br />
                طبيبة نفسية للاطفال شهيرة
              </p>
            </div>
            <div>
              <img src={img1} alt="خريطه السالم" />
              <p>خريطه السالم</p>
            </div>
          </div>
          <p>
            لقد عثرت على المقالة التي تثبت اغلاق جسر سكوبر مارينا من الساعة 8:45
            مساءً، حتى 9:45 مساءً وفقاً للخريطة، لم يكن بإمكان ابو جميل عبور
            النهر إلى سالوكا والعودة إلى حديقة الممشى في الوقت المناسب.
          </p>
          <p className="last">
            استخدم وسائل التواصل الإجتماعي لإخبار الجميع بأنك حررت للتو رجلاً
            بريئاً!‬
          </p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".an2").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint1 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>
            إحدى الوثيقتين اللتين تحتاج إليهما لإثبات أن ابو جميل بريء هي
            المقالة الرئيسية بعنوان: مقتل طبيبة نفسية للأطفال شهيره
          </p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".hint2").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint2 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>
            عندما تجد دليل على ان ابو جميل لايمكن ان يكون في مسرح الجريمة سيكون
            الامر واضح
          </p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل‬</p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
          <input
            className="btns"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".hint3").style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="hint3 hint">
        <div className="res-container">
          <h1 className="header">تلميح!</h1>
          <p>
            لإثبات ان ابو جميل بريء ستحتاج إلى مقال بعنوان مقتل طبيبة نفسية
            للأطفال لكن الدليل ليس في مقدمة المقال
          </p>
        </div>

        <div className="btns-container">
          <input
            className="btns"
            type="button"
            value="ارجع"
            onClick={() => {
              document.querySelector(".top-container").style.display = "none";
              document.querySelector(".hint3").style.display = "none";
              document.querySelector(".App").style.display = "block";
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default response;
