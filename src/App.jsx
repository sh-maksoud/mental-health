import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/ServicesConsultations/ServicesConsultations';
import Contact from './components/Contact/Contact';
import JoinDoctors from './components/JoinDoctors/JoinDoctors'; 
import BookSpecialist from './components/BookSpecialist/BookSpecialist';
import SessionList from './components/SessionList/SessionList';
import CourseBooking from './components/CourseBooking/CourseBooking';
import FamilyCounseling from './components/FamilyCounseling/FamilyCounseling';
import DoctorSearch from './components/DoctorSearch/DoctorSearch';
import AutismResources from './components/AutismResources/AutismResources';
import LearningDifficulties from './components/LearningDifficulties/LearningDifficulties';
import BehaviorModification from './components/BehaviorModification/BehaviorModification';
import SkillsDevelopment from './components/SkillsDevelopment/SkillsDevelopment';
import SpeechRehabilitation from './components/SpeechRehabilitation/SpeechRehabilitation'; 
import MentalSupport from './components/MentalSupport/MentalSupport';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-doctors" element={<JoinDoctors />} />
            <Route path="/book-specialist" element={<BookSpecialist />} />
            <Route path="/session-list" element={<SessionList />} />
            <Route path="/course-booking" element={<CourseBooking />} />
            <Route path="/family-counseling" element={<FamilyCounseling />} />
            <Route path="/book-doctor" element={<DoctorSearch />} /> 
            <Route path="/autism-resources" element={<AutismResources />} />
            <Route path="/learning-difficulties" element={<LearningDifficulties />} />
            <Route path="/behavior-modification" element={<BehaviorModification />} />
            <Route path="/skills-development" element={<SkillsDevelopment />} />
            <Route path="/speech-rehabilitation" element={<SpeechRehabilitation />} /> 
            <Route path="/mental-support" element={<MentalSupport />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
