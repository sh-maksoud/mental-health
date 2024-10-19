import './Home.css';
import { Link } from 'react-router-dom'; // Importing Link for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faUserMd, faCalendarCheck, faChalkboardTeacher, faHandsHelping, faPuzzlePiece, faBook, faWrench, faChild, faBrain, faCommentDots, faHeadSideVirus } from '@fortawesome/free-solid-svg-icons'; // Import required icons

function Home() {
    return (
        <section id="home" className="home-section">
            <h2>الرئيسية</h2>
            <p>مرحبًا بكم في منصة دعم الصحة النفسية. نقدم خدمات مخصصة لتحسين الصحة النفسية ورفاهية الأفراد.</p>
            <p>
                هدفنا هو توفير الدعم اللازم للأفراد وعائلاتهم، من خلال تقديم جلسات إرشادية، وحجز مواعيد مع دكاترة متخصصين، بالإضافة إلى حجز الكورسات التي تلبي احتياجاتكم.
            </p>
            <h3>خدماتنا تشمل</h3>
            <div className="homecards-container">
                <Link to="/join-doctors" className="homecard">
                    <FontAwesomeIcon icon={faUserMd} className="homecard-icon" />
                    <h4>انضم كطبيب أو أخصائي</h4>
                    <p>سجّل كطبيب أو أخصائي وابدأ في تقديم الدعم للأفراد.</p>
                </Link>
                <Link to="/book-doctor" className="homecard">
                    <FontAwesomeIcon icon={faCalendarCheck} className="homecard-icon" />
                    <h4>احجز مع دكتور</h4>
                    <p>اختر دكتور متخصص واحجز موعدك.</p>
                </Link>
                <Link to="/book-specialist" className="homecard">
                    <FontAwesomeIcon icon={faChalkboardTeacher} className="homecard-icon" />
                    <h4>احجز مع أخصائي</h4>
                    <p>احجز جلسة مع الأخصائي المناسب لاحتياجاتك.</p>
                </Link>
                <Link to="/course-booking" className="homecard">
                    <FontAwesomeIcon icon={faBook} className="homecard-icon" />
                    <h4>احجز دورات تدريبية</h4>
                    <p>دورات تدريبية لتطوير مهاراتك الشخصية والاجتماعية.</p>
                </Link>
                <Link to="/family-counseling" className="homecard">
                    <FontAwesomeIcon icon={faHandsHelping} className="homecard-icon" />
                    <h4>إرشاد أسري</h4>
                    <p>جلسات إرشاد لدعم الأسرة في تحقيق التوازن النفسي.</p>
                </Link>
                <Link to="/autism-resources" className="homecard">
                    <FontAwesomeIcon icon={faPuzzlePiece} className="homecard-icon" />
                    <h4>اضطرابات التوحد</h4>
                    <p>برامج دعم وتأهيل للأطفال المصابين بالتوحد.</p>
                </Link>
                <Link to="/learning-difficulties" className="homecard">
                    <FontAwesomeIcon icon={faBook} className="homecard-icon" />
                    <h4>صعوبات التعلم</h4>
                    <p>استراتيجيات لمساعدة الأطفال في مواجهة صعوبات التعلم.</p>
                </Link>
                <Link to="/behavior-modification" className="homecard">
                    <FontAwesomeIcon icon={faWrench} className="homecard-icon" />
                    <h4>تعديل السلوك</h4>
                    <p>برامج متخصصة لتعديل سلوك الأطفال.</p>
                </Link>
                <Link to="/skills-development" className="homecard">
                    <FontAwesomeIcon icon={faChild} className="homecard-icon" />
                    <h4>تنمية المهارات</h4>
                    <p>أنشطة وبرامج لتنمية المهارات الشخصية والاجتماعية.</p>
                </Link>
                <Link to="/speech-rehabilitation" className="homecard">
                    <FontAwesomeIcon icon={faCommentDots} className="homecard-icon" />
                    <h4>التخاطب</h4>
                    <p>جلسات علاجية لتحسين مهارات التخاطب والنطق.</p>
                </Link>
                <Link to="/mental-support" className="homecard">
                    <FontAwesomeIcon icon={faHeadSideVirus} className="homecard-icon" />
                    <h4>الدعم النفسي</h4>
                    <p>استشارات ودعم نفسي لتحقيق التوازن والاستقرار.</p>
                </Link>
            </div>
            <p>
                انضموا إلينا في رحلتكم نحو الصحة النفسية الأفضل! تواصلوا معنا للحصول على المزيد من المعلومات حول خدماتنا وكيف يمكننا مساعدتكم.
            </p>
        </section>
    );
}

export default Home;
