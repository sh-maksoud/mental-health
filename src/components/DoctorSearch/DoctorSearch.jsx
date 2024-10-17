import { useState } from 'react';
import './DoctorSearch.css';

function DoctorSearch() {
    const [specialty, setSpecialty] = useState('');
    const [governorate, setGovernorate] = useState('');
    const [area, setArea] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleSearch = () => {
        // هنا يمكنك تنفيذ البحث بناءً على القيم المدخلة
        console.log(`بحث عن دكتور: التخصص: ${specialty}, المحافظة: ${governorate}, المنطقة: ${area}, البحث: ${searchQuery}`);
    };

    return (
        <div className="doctor-search">
            <h2>أنا ابحث عن دكتور</h2>
            <div className="search-fields">
                <label>اختار التخصص:</label>
                <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                    <option value="">اختر التخصص</option>
                    <option value="إرشاد أسري">إرشاد أسري</option>
                    <option value="تعديل السلوك">تعديل السلوك</option>
                    <option value="تنمية المهارات">تنمية المهارات</option>
                    <option value="تأهيل تخاطبي">تأهيل تخاطبي</option>
                </select>

                <label>في محافظة:</label>
                <select value={governorate} onChange={(e) => setGovernorate(e.target.value)}>
                    <option value="">اختر المحافظة</option>
                    <option value="القاهرة">القاهرة</option>
                    <option value="الجيزة">الجيزة</option>
                    <option value="الإسكندرية">الإسكندرية</option>
                </select>

                <label>في منطقة:</label>
                <select value={area} onChange={(e) => setArea(e.target.value)}>
                    <option value="">اختر المنطقة</option>
                    <option value="مدينة نصر">مدينة نصر</option>
                    <option value="المعادي">المعادي</option>
                    <option value="الدقي">الدقي</option>
                </select>

                <label>أو اكتب اسم الدكتور او المستشفى:</label>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن الدكتور او المستشفى"
                />
            </div>

            <button onClick={handleSearch}>ابحث</button>
        </div>
    );
}

export default DoctorSearch;
