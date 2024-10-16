import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';
import logo from '/images/logo.png'; 

function Header() {
    const [currentDateTime, setCurrentDateTime] = useState('');

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

            // Construct the date string
            setCurrentDateTime(`${day} ${month}, ${year} - at ${hours}:${minutes}`);
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <header> 
            <div className="new-nav">
                <nav>
                    <img src={logo} alt="Logo" className="logo" />
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>الرئيسية</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>من نحن</NavLink>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>الخدمات والاستشارات</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>اتصل بنا</NavLink>
                    <span className="date-time">{currentDateTime}</span> 
                </nav>
            </div>
            <div className="main-header">
                <h1>منصة دعم الصحة النفسية</h1>
                <nav className="old-nav">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>الجلسات</NavLink>
                    <NavLink to="/mood-tracker" className={({ isActive }) => (isActive ? 'active' : '')}>تتبع المزاج</NavLink>
                    <NavLink to="/tips" className={({ isActive }) => (isActive ? 'active' : '')}>نصائح</NavLink>
                    <NavLink to="/meditation" className={({ isActive }) => (isActive ? 'active' : '')}>تمارين التأمل</NavLink>
                    <NavLink to="/autism-resources" className={({ isActive }) => (isActive ? 'active' : '')}>موارد التوحد</NavLink>
                    <NavLink to="/learning-difficulties" className={({ isActive }) => (isActive ? 'active' : '')}>صعوبات التعلم</NavLink>
                    <NavLink to="/behavior-modification" className={({ isActive }) => (isActive ? 'active' : '')}>تعديل السلوك</NavLink>
                    <NavLink to="/skill-development" className={({ isActive }) => (isActive ? 'active' : '')}>تنمية المهارات</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
