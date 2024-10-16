import './LearningDifficulties.css';

const difficulties = [
    {
        title: "عسر القراءة (Dyslexia)",
        description: "عسر القراءة هو صعوبة في القراءة والفهم. يمكن أن يظهر على شكل مشكلات في تحديد الكلمات أو الفهم السريع للنصوص.",
        strategies: "استراتيجيات مثل استخدام الكتب الصوتية، تقديم نصوص مقروءة، وتقنيات التكرار.",
        link: "https://www.example.com/dyslexia"
    },
    {
        title: "عسر الكتابة (Dysgraphia)",
        description: "عسر الكتابة يؤثر على قدرة الطفل على الكتابة بشكل صحيح. قد يكون لديهم مشاكل في الخط، والترتيب، والتعبير الكتابي.",
        strategies: "استخدام أدوات مساعدة مثل لوحات الكتابة، الحواسيب، وتقنيات الكتابة اليدوية.",
        link: "https://www.example.com/dysgraphia"
    },
    {
        title: "عسر الحساب (Dyscalculia)",
        description: "عسر الحساب يتضمن صعوبات في فهم الأرقام والعمليات الحسابية. يمكن أن يؤدي إلى مشكلات في فهم القيم أو إجراء العمليات.",
        strategies: "استخدام الألعاب التعليمية، التطبيقات، والمساعدات البصرية لفهم المفاهيم العددية.",
        link: "https://www.example.com/dyscalculia"
    },
    {
        title: "التعرف على العلامات المبكرة",
        description: "تشمل العلامات المبكرة التأخر في اكتساب اللغة، مشكلات الانتباه والتركيز. من المهم التعرف على هذه العلامات مبكرًا.",
        strategies: "مراقبة التطور اللغوي والسلوكي وتقديم الدعم العاطفي المناسب.",
        link: "https://www.example.com/early-signs"
    },
    {
        title: "تطوير مهارات الطفل",
        description: "على الرغم من التحديات، يمكن تطوير مهارات الطفل عبر التحفيز الإيجابي، استخدام الوسائل التعليمية التكنولوجية.",
        strategies: "تطبيقات تعليمية تعزز من نقاط القوة لدى الطفل.",
        link: "https://www.example.com/development-strategies"
    },
];

function LearningDifficulties() {
    return (
        <section id="learning-difficulties">
            <h2>صعوبات التعلم</h2>
            <p>يتناول هذا القسم صعوبات التعلم المختلفة التي قد يواجهها الأطفال، بالإضافة إلى استراتيجيات ومصادر دعم.</p>
            <ul>
                {difficulties.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>: {item.description} <br />
                        <em>استراتيجيات: {item.strategies}</em> <br />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">اقرأ المزيد</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default LearningDifficulties;
