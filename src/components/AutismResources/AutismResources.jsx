import './AutismResources.css';

const resources = [
  {
    title: "طرق تأهيل طفل التوحد",
    description: "اكتشف الطرق المختلفة لتأهيل طفل التوحد وتشجيعه على التفاعل الاجتماعي والتواصل وتحسين مهاراته الحياتية.",
    link: "https://www.example.com/autism-rehabilitation"
  },
  {
    title: "معلومات عن التوحد",
    description: "تعرف على أعراض التوحد وكيفية التعامل معه. يشمل ذلك علامات مبكرة للتشخيص وطرق الدعم.",
    link: "https://www.example.com/autism-info"
  },
  {
    title: "كيفية دعم الأطفال المصابين بالتوحد",
    description: "استراتيجيات ونصائح لدعم الأطفال في المنزل والمدرسة، مثل استخدام التواصل البصري والتحفيز الإيجابي.",
    link: "https://www.example.com/supporting-children"
  },
  {
    title: "مهارات التركيز وتحسين الأداء",
    description: "تقنيات لمساعدة الأطفال في التركيز وزيادة أدائهم الأكاديمي، بما في ذلك الألعاب التعليمية والتطبيقات.",
    link: "https://www.example.com/focus-skills"
  },
  {
    title: "موارد عبر الإنترنت",
    description: "مواقع مفيدة لدعم العائلات التي لديها أطفال مصابين بالتوحد. تشمل المنتديات والمقالات والدورات التدريبية.",
    link: "https://www.example.com/online-resources"
  },
  {
    title: "منظمات دعم التوحد",
    description: "قائمة بالمنظمات التي تقدم الدعم والمساعدة للعائلات والأفراد. مثل الجمعية الوطنية للتوحد.",
    link: "https://www.example.com/support-organizations"
  }
];

function AutismResources() {
  return (
    <section>
      <h2>اضطراب التوحد</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <strong>{resource.title}</strong>: {resource.description} <br />
            <a href={resource.link} target="_blank" rel="noopener noreferrer">اقرأ المزيد</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AutismResources;
