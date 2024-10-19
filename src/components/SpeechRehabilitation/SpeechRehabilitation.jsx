import './SpeechRehabilitation.css';

const speechResources = [
    {
        title: "التعرف على اضطرابات النطق والكلام",
        description: "تعرف على أنواع اضطرابات النطق والكلام وكيفية التعامل معها وفقاً لأحدث الأساليب. تتضمن هذه الاضطرابات: عسر الكلام، وعسر النطق، والخلل الصوتي.",
        link: "https://www.example.com/speech-disorders"
    },
    {
        title: "تأهيل ذارعي القوقعة",
        description: "استراتيجيات دعم الأطفال والبالغين بعد عمليات زراعة القوقعة لتحسين النطق والسمع. يشمل ذلك جلسات التأهيل السمعي والتدريب على النطق.",
        link: "https://www.example.com/cochlear-implant"
    },
    {
        title: "أساليب التعلم العلاجي",
        description: "استخدام أساليب تعليمية مثل الألعاب التفاعلية، والقصص، وممارسة المحادثات لتحسين مهارات النطق.",
        link: "https://www.example.com/therapeutic-techniques"
    },
    {
        title: "تطبيقات الهواتف الذكية",
        description: "استكشاف تطبيقات متاحة لتحسين النطق مثل التطبيقات المخصصة لتدريب اللسان وألعاب التعلم الصوتي.",
        link: "https://www.example.com/speech-apps"
    },
    {
        title: "دليل الأهل",
        description: "موارد للأهل لمساعدتهم على دعم أطفالهم في تطوير مهارات التواصل، مع نصائح عملية لمساعدتهم في المنزل.",
        link: "https://www.example.com/parents-guide"
    },
    {
        title: "استشارة أخصائي التخاطب",
        description: "تقديم استشارات مهنية من أخصائيين في التخاطب لتحديد أفضل استراتيجيات العلاج والتأهيل.",
        link: "https://www.example.com/speech-therapy-consultation"
    },
];

function SpeechRehabilitation() {
    return (
        <section id="speech-rehabilitation">
            <h2>التخاطب</h2>
            <p>في هذا القسم، نقدم موارد لدعم الأطفال والبالغين في تطوير مهارات النطق والكلام والتعامل مع اضطرابات النطق المختلفة.</p>
            <p>تتضمن هذه الموارد معلومات شاملة حول كيفية التعرف على الاضطرابات وتطبيق أحدث الأساليب لتحسين التواصل. كما يتم تناول استراتيجيات عملية وأدوات مفيدة يمكن استخدامها في البيئة المنزلية أو التعليمية.</p>
            <ul>
                {speechResources.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>: {item.description} <br />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">اقرأ المزيد</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default SpeechRehabilitation;
