import './SessionList.css';

const sessions = [
  { 
    id: 1, 
    title: "جلسة إرشادية حول التوحد", 
    description: "تتناول هذه الجلسة العوامل الأساسية لفهم التوحد وكيفية دعم الأفراد المصابين به.",
    date: "2024-10-20",
    time: "5:00 مساءً",
    facilitator: "د. علي محمد"
  },
  { 
    id: 2, 
    title: "جلسة إرشادية حول التركيز", 
    description: "تهدف الجلسة إلى تحسين مهارات التركيز والانتباه من خلال تقنيات متعددة.",
    date: "2024-10-22",
    time: "6:00 مساءً",
    facilitator: "أ. سمية أحمد"
  },
  { 
    id: 3, 
    title: "جلسة إرشادية حول المهارات الاجتماعية", 
    description: "تساعد هذه الجلسة في تعزيز المهارات الاجتماعية لدى الأفراد من خلال الأنشطة التفاعلية.",
    date: "2024-10-25",
    time: "4:00 مساءً",
    facilitator: "أ. ليلى حسين"
  },
  { 
    id: 4, 
    title: "جلسة إرشادية حول القلق", 
    description: "تركز الجلسة على فهم القلق وكيفية التعامل معه بطرق فعالة.",
    date: "2024-10-28",
    time: "7:00 مساءً",
    facilitator: "د. فارس سعيد"
  },
  { 
    id: 5, 
    title: "جلسة إرشادية حول إدارة الغضب", 
    description: "تهدف الجلسة إلى تعليم استراتيجيات فعالة لإدارة الغضب والتعبير عنه بشكل صحي.",
    date: "2024-10-30",
    time: "3:00 مساءً",
    facilitator: "أ. سارة خالد"
  },
];

function SessionList() {
  return (
    <section>
      <h2>الجلسات الإرشادية</h2>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            <h3>{session.title}</h3>
            <p><strong>الوصف:</strong> {session.description}</p>
            <p><strong>التاريخ:</strong> {session.date}</p>
            <p><strong>الوقت:</strong> {session.time}</p>
            <p><strong>المشرف:</strong> {session.facilitator}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SessionList;
