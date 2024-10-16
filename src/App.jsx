import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/ServicesConsultations/ServicesConsultations';
import Contact from './components/Contact/Contact';
import SessionList from './components/SessionList/SessionList';
import MoodTracker from './components/MoodTracker/MoodTracker';
import Tips from './components/Tips/Tips';
import Meditation from './components/Meditation/Meditation';
import AutismResources from './components/AutismResources/AutismResources';
import LearningDifficulties from './components/LearningDifficulties/LearningDifficulties';
import BehaviorModification from './components/BehaviorModification/BehaviorModification';
import SkillDevelopment from './components/SkillDevelopment/SkillDevelopment';

import './App.css';

function App() {
  return (
    <Router>
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
            <Route path="/tips" element={<Tips />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/autism-resources" element={<AutismResources />} />
            <Route path="/learning-difficulties" element={<LearningDifficulties />} />
            <Route path="/behavior-modification" element={<BehaviorModification />} />
            <Route path="/skill-development" element={<SkillDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
