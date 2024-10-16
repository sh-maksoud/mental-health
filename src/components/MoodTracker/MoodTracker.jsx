import { useState } from 'react';
import './MoodTracker.css';

function MoodTracker() {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const timestamp = new Date().toLocaleString();
    const newEntry = { mood, note, timestamp };
    setMoodHistory([...moodHistory, newEntry]);
    setMood('');
    setNote('');
  };

  return (
    <section>
      <h2>تتبع المزاج</h2>
      <form onSubmit={handleSubmit}>
        <label>
          كيف تشعر اليوم؟
          <select value={mood} onChange={handleMoodChange} required>
            <option value="">اختر المزاج</option>
            <option value="سعيد">😊 سعيد</option>
            <option value="محايد">😐 محايد</option>
            <option value="حزين">😢 حزين</option>
            <option value="قلق">😟 قلق</option>
            <option value="مسترخي">😌 مسترخي</option>
          </select>
        </label>
        <label>
          ملاحظات (اختياري):
          <input type="text" value={note} onChange={handleNoteChange} />
        </label>
        <button type="submit">تقديم</button>
      </form>
      <h3>تاريخ المزاج:</h3>
      <ul>
        {moodHistory.map((entry, index) => (
          <li key={index}>
            <strong>{entry.timestamp}</strong>: {entry.mood} {entry.note && `- ${entry.note}`}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoodTracker;
