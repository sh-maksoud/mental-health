import './LearningDifficulties.css';

const difficulties = [
    {
        category: "صعوبات تعلم نمائية",
        description: "تتضمن صعوبات التعلم النمائية مشاكل تتعلق بالوظائف العقلية مثل التركيز، الانتباه، الذاكرة، والإدراك. تُستخدم أحدث الطرق العلاجية والوسائل المبتكرة لتحسين هذه المهارات.",
        strategies: "استخدام برامج تحفيز الإدراك والتدريبات العقلية المتقدمة لمساعدة الطفل على تطوير قدراته الفكرية.",
        link: "https://www.example.com/developmental-learning-difficulties"
    },
    {
        category: "صعوبات تعلم أكاديمية",
        description: "تشمل صعوبات التعلم الأكاديمية مشاكل في القراءة، الكتابة، والرياضيات. تُعتبر استراتيجيات الدعم التعليمي الأكثر فعالية هي تلك التي تعزز التعلم الفردي والممارسة التفاعلية.",
        strategies: "تطبيقات تفاعلية، استراتيجيات القراءة العلاجية، وبرامج تعزيز المهارات الحسابية.",
        link: "https://www.example.com/academic-learning-difficulties"
    }
];

function LearningDifficulties() {
    return (
        <section id="learning-difficulties">
            <h2>صعوبات التعلم</h2>
            <p>يتناول هذا القسم صعوبات التعلم النمائية والأكاديمية التي قد يواجهها الأطفال، بالإضافة إلى أحدث الوسائل العلاجية والاستراتيجيات الفعّالة.</p>
            <ul>
                {difficulties.map((item, index) => (
                    <li key={index}>
                        <strong>{item.category}</strong>: {item.description} <br />
                        <em>استراتيجيات: {item.strategies}</em> <br />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">اقرأ المزيد</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default LearningDifficulties;
