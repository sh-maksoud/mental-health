import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h4>من نحن</h4>
          <p>
          منصة دعم الصحة النفسية تقدم خدمات استشارية، حجز جلسات مع دكتور متخصص، بالإضافة إلى إرشاد أسري، ودعم للاضطرابات مثل التوحد وصعوبات التعلم، مع برامج تعديل السلوك وتنمية المهارات والتأهيل التخاطبي، ودعم نفسي لتعزيز الصحة العقلية.
          </p>
        </div>

        <div className="footer-section links">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/home">الرئيسية</Link></li>
            <li><Link to="/about">من نحن</Link></li>
            <li><Link to="/services">الخدمات ,الاستشارات</Link></li>
            <li><Link to="/contact">اتصل بنا</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>تابعنا</h4>
          <ul className="social-links">
            <li><Link to="#facebook" aria-label="Facebook">Facebook</Link></li>
            <li><Link to="#twitter" aria-label="Twitter">Twitter</Link></li>
            <li><Link to="#instagram" aria-label="Instagram">Instagram</Link></li>
          </ul>
        </div>
      </div>

      <p className="footer-bottom">جميع الحقوق محفوظة © 2024</p>
    </footer>
  );
}

export default Footer;
