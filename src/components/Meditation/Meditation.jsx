import './Meditation.css';

const meditationSessions = [
  { id: 1, title: "تأمل الوعي الكامل", duration: "10 دقائق", audioLink: "https://www.example.com/meditation1" },
  { id: 2, title: "تأمل التخيل الموجه", duration: "15 دقيقة", audioLink: "https://www.example.com/meditation2" },
  { id: 3, title: "تأمل المحبة واللطف", duration: "20 دقيقة", audioLink: "https://www.example.com/meditation3" },
];

function Meditation() {
  return (
    <section>
      <h2>تمارين التأمل</h2>
      <p>استمع إلى التأملات الموجهة لتحسين صحتك النفسية.</p>
      <ul className="meditation-list">
        {meditationSessions.map(session => (
          <li key={session.id}>
            <span>{session.title} - {session.duration}</span>
            <a href={session.audioLink} target="_blank" rel="noopener noreferrer">استمع الآن</a>
          </li>
        ))}
      </ul>
      <h3>نصائح للتأمل:</h3>
      <p>1. ابحث عن مكان هادئ. <br />
         2. اجلس في وضع مريح. <br />
         3. ركز على تنفسك. <br />
         4. حاول أن تكون في اللحظة الحالية.
      </p>
    </section>
  );
}

export default Meditation;
