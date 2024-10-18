import { useState } from 'react';
import marihan from '/images/marihan.png';
import ahmed from '/images/ahmed.jpeg';
import sara from '/images/sara.jpg';
import './BookSpecialist.css';

const specialistsList = [
    { 
        name: 'أ. ماريهان كمال السعيد', 
        specialty: 'أخصائي تخاطب',
        imageUrl: marihan 
    },
    { 
        name: 'أ. أحمد محمد', 
        specialty: 'أخصائي نفسي',
        imageUrl: ahmed
    },
    { 
        name: 'أ. سارة علي', 
        specialty: 'أخصائية تغذية',
        imageUrl: sara
    },
];

const BookSpecialist = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        message: '',
        specialist: '' // Add specialist field
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log('Booking request submitted:', formData);
    };

    return (
        <div className="book-specialist">
            <h3>الأخصائيين:</h3>
            <ul className="specialists-list">
                {specialistsList.map((specialist, index) => (
                    <li key={index} className="specialist-item">
                        <img src={specialist.imageUrl} alt={specialist.name} className="specialist-image" />
                        <div>
                            <strong>{specialist.name}</strong> - {specialist.specialty}
                        </div>
                    </li>
                ))}
            </ul>
            <h2>احجز مع أخصائي</h2>
            <p>يرجى ملء النموذج أدناه لحجز موعد مع أخصائي.</p>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="specialist">اختر الأخصائي:</label>
                    <select
                        id="specialist"
                        name="specialist"
                        value={formData.specialist}
                        onChange={handleChange}
                        required
                    >
                        <option value="">اختر الأخصائي</option>
                        {specialistsList.map((specialist, index) => (
                            <option key={index} value={specialist.name}>
                                {specialist.name}
                                - {specialist.specialty}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">الاسم الكامل:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">البريد الإلكتروني:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">تاريخ الموعد:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">وقت الموعد:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">رسالة (اختياري):</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-button">إرسال الطلب</button>
            </form>
        </div>
    );
};

export default BookSpecialist;
