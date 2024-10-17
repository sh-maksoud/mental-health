import './Ershad.css';

const ershad = [
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

function Ershad() {
  const categories = [...new Set(ershad.map(item => item.category))]; // Get unique categories

  return (
    <section>
      <h2>إرشاد أسري لتحسين الصحة النفسية</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {ershad.filter(item => item.category === category).map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Ershad;
