import './BehaviorModification.css';

const behaviors = [
    {
        title: "أسس النظرية لعمل خطة سلوكية",
        description: "تحديد الأسس النظرية المناسبة لعمل خطة سلوكية لكل طفل، وذلك تبعًا لحالة الاضطراب المصاحبة له.",
        examples: "يتطلب الأمر تقييمات فردية وفهم دقيق لحالة الطفل.",
        link: "https://www.example.com/behavior-theory"
    },
    {
        title: "خطوات تعديل السلوك",
        description: "تحديد السلوك المراد تغييره، تعزيز السلوك الإيجابي، وتجاهل السلوكيات السلبية عند الضرورة.",
        examples: "مثل استخدام نظام المكافآت لتشجيع السلوك الجيد.",
        link: "https://www.example.com/steps"
    },
    {
        title: "التدعيم والعقاب والتجاهل",
        description: "استخدام وسائل مثل التدعيم الإيجابي لتشجيع السلوكيات الجيدة، والعقاب المناسب للسلوكيات غير المرغوبة، والتجاهل عند الحاجة.",
        examples: "بطاقات المكافآت كنوع من التدعيم الإيجابي أو تجاهل السلوك غير المناسب.",
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
        description: "تعديل السلوكيات اليومية مثل الالتزام بقواعد الوقت، والتعامل مع سلوكيات العدوانية والتخريب.",
        examples: "تدريب الطفل على إدارة وقته، تقليل السلوك العدواني، ومنع التخريب.",
        link: "https://www.example.com/examples"
    }
];

function BehaviorModification() {
    return (
        <section id="behavior-modification">
            <h2>تعديل السلوك</h2>
            <p>في هذا القسم، نقدم خطط سلوكية فعّالة ومعالجة الاضطرابات السلوكية للأطفال الذين يعانون من مشاكل في السلوك.</p>
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
