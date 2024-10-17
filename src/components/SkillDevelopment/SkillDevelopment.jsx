import './SkillDevelopment.css';

const skills = [
    {
        title: "تطوير المهارات الاجتماعية",
        description: "تشجيع التفاعل مع الأقران من خلال اللعب الجماعي والمشاركة في الأنشطة.",
        activities: "أنشطة مثل كرة السلة، الفرق المسرحية، وألعاب الأدوار.",
        link: "https://www.example.com/social-skills"
    },
    {
        title: "مهارات العناية بالذات",
        description: "تعليم الأطفال كيفية الاعتماد على النفس في الأنشطة اليومية مثل اللبس، الأكل، والعناية الشخصية.",
        activities: "تشجيع الأطفال على القيام بأنشطة يومية بمفردهم مثل ترتيب الملابس وغسل الأيدي.",
        link: "https://www.example.com/self-care-skills"
    },
    {
        title: "تنمية المهارات اللغوية",
        description: "استخدام تطبيقات تعليمية لتحسين المفردات ومهارات النطق، وتطوير القدرة على سرد الأحداث.",
        activities: "أنشطة مثل قراءة القصص، المجموعات الضمنية، وسرد الأحداث بطريقة متسلسلة.",
        link: "https://www.example.com/language-skills"
    },
    {
        title: "تطوير المهارات الحركية الدقيقة",
        description: "أنشطة مثل الرسم والتلوين لتحسين التنسيق بين العين واليد.",
        activities: "استخدام الألعاب التي تتطلب استخدام الأدوات الصغيرة، مثل بناء الأشياء.",
        link: "https://www.example.com/fine-motor-skills"
    },
    {
        title: "استخدام الألعاب التعليمية",
        description: "دعم تنمية المهارات من خلال الألعاب التعليمية والأنشطة التفاعلية.",
        activities: "أنشطة مثل الألعاب اللوحية والألعاب الإلكترونية التعليمية.",
        link: "https://www.example.com/educational-games"
    }
];

function SkillDevelopment() {
    return (
        <section id="skill-development">
            <h2>تنمية المهارات</h2>
            <p>يركز هذا القسم على استخدام برنامج تنمية شاملة للطفل لتعزيز مهاراته المختلفة.</p>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.title}</strong>: {skill.description} <br />
                        <em>أنشطة مقترحة: {skill.activities}</em> <br />
                        <a href={skill.link} target="_blank" rel="noopener noreferrer">اقرأ المزيد</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default SkillDevelopment;
