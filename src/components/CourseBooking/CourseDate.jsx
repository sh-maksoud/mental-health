import React from 'react';

const courseDates = {
    "كورس تعديل السلوك": "2024-11-01",
    "كورس تنمية المهارات": "2024-11-10",
    "كورس إرشاد أسري": "2024-11-15",
    "كورس تأهيل تخاطبي": "2024-12-01",
};

function CourseDate({ selectedCourse }) {
    return (
        <div>
            <p><strong>تاريخ الكورس:</strong> {courseDates[selectedCourse] || "لم يتم اختيار الكورس"}</p>
        </div>
    );
}

export default CourseDate;
