

import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './Header.css';
import logo from '/images/logo.png'; 

function Header() {
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if the screen is mobile
    const dropdownRef = useRef(null); // Create a ref for the dropdown

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

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    // Close dropdown if clicking outside and not on mobile
    const handleClickOutside = (event) => {
        if (!isMobile && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    };

    // Event listener for clicks outside the dropdown
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile]);

    // Update mobile state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = () => {
        if (isMobile) {
            setIsDropdownVisible(false); // Close dropdown on mobile when a link is clicked
        }
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
                            ref={dropdownRef} // Attach ref to dropdown
                        >
                            <NavLink 
                                to="/services" 
                                className="dropbtn" 
                                onClick={toggleDropdown} // Toggle on click
                            >
                                الخدمات <span className="arrow">▼</span>
                            </NavLink>
                            {isDropdownVisible && ( 
                                <div className="dropdown-content">
                                    <NavLink to="/join-doctors" onClick={handleLinkClick}>انضم كطبيب أو أخصائي</NavLink> 
                                    <NavLink to="/book-doctor" onClick={handleLinkClick}>احجز مع دكتور</NavLink>
                                    <NavLink to="/book-specialist" onClick={handleLinkClick}>احجز مع أخصائي</NavLink>
                                    <NavLink to="/course-booking" onClick={handleLinkClick}>احجز دورات تدريبية</NavLink>
                                    <NavLink to="/family-counseling" onClick={handleLinkClick}>إرشاد أسري</NavLink>
                                    <NavLink to="/autism-resources" onClick={handleLinkClick}>اضطرابات التوحد</NavLink>
                                    <NavLink to="/learning-difficulties" onClick={handleLinkClick}>صعوبات التعلم</NavLink>
                                    <NavLink to="/behavior-modification" onClick={handleLinkClick}>تعديل السلوك</NavLink>
                                    <NavLink to="/skills-development" onClick={handleLinkClick}>تنمية المهارات</NavLink>
                                    <NavLink to="/speech-rehabilitation" onClick={handleLinkClick}> التخاطب</NavLink>
                                    <NavLink to="/sign-language-training" onClick={handleLinkClick}>تدريب لغة الإشارة</NavLink>
                                    <NavLink to="/deaf-support" onClick={handleLinkClick}> الصم والبكم</NavLink>
                                    <NavLink to="/mental-support" onClick={handleLinkClick}>الدعم النفسي</NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>اتصل بنا</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
