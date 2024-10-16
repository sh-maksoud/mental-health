import './Tips.css';

const tips = [
  { 
    text: "مارس التمارين الرياضية بانتظام.", 
    category: "الرفاهية البدنية", 
    link: "https://www.example.com/exercise"
  },
  { 
    text: "خصص وقتًا للاسترخاء.", 
    category: "الرفاهية البدنية", 
    link: "https://www.example.com/relaxation"
  },
  { 
    text: "تحدث مع شخص موثوق حول مشاعرك.", 
    category: "الاتصالات الاجتماعية", 
    link: "https://www.example.com/support"
  },
  { 
    text: "قم بتدوين مشاعرك في دفتر يوميات.", 
    category: "الممارسات العقلية", 
    link: "https://www.example.com/journaling"
  },
  { 
    text: "حاول ممارسة التأمل أو اليوغا.", 
    category: "الممارسات العقلية", 
    link: "https://www.example.com/meditation"
  },
  { 
    text: "اقضِ وقتًا في الطبيعة.", 
    category: "الرفاهية البدنية", 
    link: "https://www.example.com/nature"
  },
  { 
    text: "تعلم مهارات جديدة.", 
    category: "الممارسات العقلية", 
    link: "https://www.example.com/learning"
  },
];

function Tips() {
  const categories = [...new Set(tips.map(tip => tip.category))]; // Get unique categories

  return (
    <section>
      <h2>نصائح لتحسين الصحة النفسية</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {tips.filter(tip => tip.category === category).map((tip, index) => (
              <li key={index}>
                <a href={tip.link} target="_blank" rel="noopener noreferrer">
                  {tip.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Tips;
