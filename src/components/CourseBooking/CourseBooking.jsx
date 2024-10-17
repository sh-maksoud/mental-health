import { useState } from 'react';
import './CourseBooking.css';

const doctors = [
    { name: "د. أحمد محمد", specialty: "إرشاد أسري", bio: "أخصائي إرشاد أسري بخبرة تزيد عن 10 سنوات." },
    { name: "د. سارة علي", specialty: "تعديل السلوك", bio: "خبيرة في تعديل السلوك للأطفال والمراهقين." },
    { name: "د. خالد حسن", specialty: "تنمية المهارات", bio: "متخصص في تنمية المهارات للأطفال." },
    { name: "د. ليلى محمود", specialty: "تأهيل تخاطبي", bio: "خبيرة في علاج اضطرابات النطق والكلام." },
];

const courses = [
    { name: "كورس تعديل السلوك", duration: "4 أسابيع", description: "برنامج شامل لتعديل سلوك الأطفال.", startDate: "2024-11-01" },
    { name: "كورس تنمية المهارات", duration: "6 أسابيع", description: "برنامج لتطوير المهارات الحركية والاجتماعية.", startDate: "2024-11-15" },
    { name: "كورس إرشاد أسري", duration: "5 أسابيع", description: "دورة لتحسين التواصل الأسري.", startDate: "2024-11-08" },
    { name: "كورس تأهيل تخاطبي", duration: "8 أسابيع", description: "برنامج تأهيلي لذوي القوقعة.", startDate: "2024-12-01" },
];

function CourseBooking() {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

    const handleBooking = () => {
        if (selectedDoctor && selectedCourse && userData.name && userData.email && userData.phone) {
            setBookingSuccess(true);
            console.log("Booking Details:", {
                doctor: selectedDoctor,
                course: selectedCourse,
                user: userData,
            });
        } else {
            setBookingSuccess(false);
            alert('يرجى ملء جميع البيانات لإتمام الحجز.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <section className="course-booking">
            <h2>حجز الكورسات</h2>
            <p>اختر الطبيب والكورس المناسبين لك وأدخل بياناتك لإتمام الحجز.</p>

            <div className="selection-section">
                <div className="doctor-section">
                    <label htmlFor="doctor-select">اختر الطبيب:</label>
                    <select
                        id="doctor-select"
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                    >
                        <option value="">-- اختر الطبيب --</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={doctor.name}>
                                {doctor.name} - {doctor.specialty}
                            </option>
                        ))}
                    </select>
                    {selectedDoctor && (
                        <div className="doctor-info">
                            <h3>معلومات عن الطبيب</h3>
                            <p>{doctors.find(doc => doc.name === selectedDoctor)?.bio}</p>
                        </div>
                    )}
                </div>

                <div className="course-section">
                    <label htmlFor="course-select">اختر الكورس:</label>
                    <select
                        id="course-select"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                        <option value="">-- اختر الكورس --</option>
                        {courses.map((course, index) => (
                            <option key={index} value={course.name}>
                                {course.name} - {course.duration}
                            </option>
                        ))}
                    </select>
                    {selectedCourse && (
                        <div className="course-info">
                            <h3>تفاصيل الكورس</h3>
                            <p>{courses.find(course => course.name === selectedCourse)?.description}</p>
                            <p><strong>تاريخ بداية الكورس:</strong> {courses.find(course => course.name === selectedCourse)?.startDate}</p>
                        </div>
                    )}
                </div>

                {/* User Data Form */}
                <div className="user-data-section">
                    <h3>معلومات المستخدم</h3>
                    <label>الاسم:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        placeholder="أدخل اسمك"
                    />

                    <label>البريد الإلكتروني:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="أدخل بريدك الإلكتروني"
                    />

                    <label>رقم الهاتف:</label>
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        placeholder="أدخل رقم هاتفك"
                    />
                </div>

                <button onClick={handleBooking}>إتمام الحجز</button>
            </div>

            {bookingSuccess && (
                <div className="booking-success">
                    <p>تم حجز الكورس بنجاح! سيتم التواصل معك لتأكيد تفاصيل الحجز.</p>
                </div>
            )}
        </section>
    );
}

export default CourseBooking;
