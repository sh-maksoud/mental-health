import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';
import logo from '/images/logo.png'; 

function Header() {
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // حالة للتحكم في رؤية القائمة

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const months = [
                "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", 
                "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
            ];
            const day = now.getDate();
            const month = months[now.getMonth()]; 
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, '0'); 
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setCurrentDateTime(`${day} ${month}, ${year} -  ${hours}:${minutes}`);
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000); 
        return () => clearInterval(intervalId);
    }, []);

    // Handle mouse enter and leave for the dropdown
    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };

    return (
        <header> 
            <div className="main-header">
                <span className="date-time">{currentDateTime}</span>
                <h1>منصة دعم الصحة النفسية</h1>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">فيسبوك</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">تويتر</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">إنستغرام</a>
                </div>
            </div>
            <div className="new-nav">
                <nav className="navbar">
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="nav-links">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>الرئيسية</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>من نحن</NavLink>
                        
                        {/* Dropdown Menu for Services */}
                        <div 
                            className="dropdown"
                            onMouseEnter={handleMouseEnter} // إظهار القائمة عند التحويم
                            onMouseLeave={handleMouseLeave} // إخفاء القائمة عند الخروج
                        >
                            <NavLink to="/services" className="dropbtn"> {/* تغيير هنا ليصبح NavLink */}
                                الخدمات <span className="arrow">▼</span>
                            </NavLink>
                            {isDropdownVisible && ( // عرض القائمة بناءً على الحالة
                                <div className="dropdown-content">
                                    <NavLink to="/join-doctors">انضم كطبيب أو أخصائي</NavLink> 
                                    <NavLink to="/book-doctor">احجز مع دكتور</NavLink>
                                    <NavLink to="/book-specialist">احجز مع أخصائي</NavLink>
                                    <NavLink to="/course-booking">احجز دورات تدريبية</NavLink>
                                    <NavLink to="/ershad">إرشاد أسري</NavLink>
                                    <NavLink to="/autism-resources">اضطرابات التوحد</NavLink>
                                    <NavLink to="/learning-difficulties">صعوبات التعلم</NavLink>
                                    <NavLink to="/behavior-modification">تعديل السلوك</NavLink>
                                    <NavLink to="/skill-development">تنمية المهارات</NavLink>
                                    <NavLink to="/speech-rehabilitation"> التخاطب</NavLink>
                                    <NavLink to="/counseling">الدعم النفسي</NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>اتصل بنا</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;  
