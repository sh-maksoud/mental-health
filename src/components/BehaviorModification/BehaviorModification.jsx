import './BehaviorModification.css';

const behaviors = [
    {
        title: "تعديل السلوك",
        description: "التعرف على كيفية استخدام استراتيجيات تعديل السلوك بشكل فعال لتغيير السلوكيات غير المرغوب فيها.",
        examples: "مثل العدوانية أو السلوك الانعزالي.",
        link: "https://www.example.com/behavior-modification"
    },
    {
        title: "خطوات تعديل السلوك",
        description: "تحديد السلوك المراد تغييره، تعزيز السلوك الإيجابي، وتجاهل السلوكيات السلبية عند الضرورة.",
        examples: "مثل استخدام نظام المكافآت لتشجيع السلوك الجيد.",
        link: "https://www.example.com/steps"
    },
    {
        title: "أدوات تعديل السلوك",
        description: "استخدام بطاقات المكافآت، النظام الرمزي (Token Economy)، وبرامج تدريب.",
        examples: "يمكنك استخدام بطاقات المكافآت لتحفيز الأطفال على الالتزام بالقواعد.",
        link: "https://www.example.com/tools"
    },
    {
        title: "التواصل الفعّال",
        description: "ضرورة التواصل بين المعلمين وأولياء الأمور لتنفيذ خطط تعديل السلوك.",
        examples: "اجتماعات دورية لمناقشة تقدم الطفل.",
        link: "https://www.example.com/communication"
    },
    {
        title: "أمثلة عملية",
        description: "تعديل السلوكيات اليومية مثل الالتزام بقواعد الوقت.",
        examples: "تدريب الطفل على إدارة وقته بشكل فعال.",
        link: "https://www.example.com/examples"
    }
];

function BehaviorModification() {
    return (
        <section id="behavior-modification">
            <h2>تعديل السلوك</h2>
            <p>في هذا القسم، نقدم طرق تعديل السلوك للأطفال الذين يعانون من مشاكل في السلوك.</p>
            <ul>
                {behaviors.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>: {item.description} <br />
                        <em>أمثلة: {item.examples}</em> <br />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">اقرأ المزيد</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default BehaviorModification;
