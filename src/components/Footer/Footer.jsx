import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h4>من نحن</h4>
          <p>
            منصة دعم الصحة النفسية تقدم خدمات استشارية، نصائح لتحسين الصحة النفسية، 
            وتتبع المزاج اليومي، بالإضافة إلى تمارين الاسترخاء والتأمل.
          </p>
        </div>

        <div className="footer-section links">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="/home">الرئيسية</a></li>
            <li><a href="/about">من نحن</a></li>
            <li><a href="/services">الخدمات ,الاستشارات</a></li>
            <li><a href="/contact">اتصل بنا</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>تابعنا</h4>
          <ul className="social-links">
            <li><a href="#facebook" aria-label="Facebook">Facebook</a></li>
            <li><a href="#twitter" aria-label="Twitter">Twitter</a></li>
            <li><a href="#instagram" aria-label="Instagram">Instagram</a></li>
          </ul>
        </div>
      </div>

      <p className="footer-bottom">جميع الحقوق محفوظة © 2024</p>
    </footer>
  );
}

export default Footer;
