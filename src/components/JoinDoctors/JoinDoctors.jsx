import React, { useState } from 'react';
import './JoinDoctors.css';

const JoinDoctors = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        specialty: '',
        experience: '',
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="join-doctors">
            <h2>انضم كطبيب أو أخصائي</h2> {/* Changed heading */}
            <p>هل ترغب في الانضمام إلى فريقنا الطبي؟ يرجى ملء النموذج أدناه للانضمام إلينا.</p>
            <form onSubmit={handleSubmit} className="join-form">
                <label htmlFor="name">الاسم الكامل:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">البريد الإلكتروني:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="specialty">التخصص:</label>
                <input
                    type="text"
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="experience">سنوات الخبرة:</label>
                <input
                    type="number"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                />

                <div className="agreement-group">
                    <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="agreement">
                        أوافق على <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">اتفاقية الخصوصية للأطباء</a>
                    </label>
                </div>

                <button type="submit" className="submit-button">إرسال الطلب</button>
            </form>
        </div>
    );
};

export default JoinDoctors;
