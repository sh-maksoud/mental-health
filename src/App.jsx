import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/ServicesConsultations/ServicesConsultations';
import Contact from './components/Contact/Contact';
import SessionList from './components/SessionList/SessionList';
import MoodTracker from './components/MoodTracker/MoodTracker';
import Ershad from './components/Ershad/Ershad';
import Meditation from './components/Meditation/Meditation';
import AutismResources from './components/AutismResources/AutismResources';
import LearningDifficulties from './components/LearningDifficulties/LearningDifficulties';
import BehaviorModification from './components/BehaviorModification/BehaviorModification';
import SkillDevelopment from './components/SkillDevelopment/SkillDevelopment';
import SpeechRehabilitation from './components/SpeechRehabilitation/SpeechRehabilitation'; 
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';



import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<SessionList />} />
            <Route path="/mood-tracker" element={<MoodTracker />} />
            <Route path="/ershad" element={<Ershad />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/autism-resources" element={<AutismResources />} />
            <Route path="/learning-difficulties" element={<LearningDifficulties />} />
            <Route path="/behavior-modification" element={<BehaviorModification />} />
            <Route path="/skill-development" element={<SkillDevelopment />} />
            <Route path="/speech-rehabilitation" element={<SpeechRehabilitation />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
