import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import AboutCeliac from './pages/AboutCeliac.jsx'
import './about.css'
import Quizzes from './pages/Quizzes.jsx'
import Resources from './pages/Resources.jsx'
import GeneralKnowledge from './pages/quizzes/GeneralKnowledge.jsx'
import LabelProficiencyIndex from './pages/quizzes/LabelProficiencyIndex.jsx'
import LabelProficiencyEasy from './pages/quizzes/LabelProficiencyEasy.jsx'
import LabelProficiencyStandard from './pages/quizzes/LabelProficiencyStandard.jsx'
// (We’ll add Standard later)



export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-celiac" element={<AboutCeliac />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/quizzes/general-knowledge" element={<GeneralKnowledge />} />
          <Route path="/quizzes/label-proficiency" element={<LabelProficiencyIndex />} />
          <Route path="/quizzes/label-proficiency/easy" element={<LabelProficiencyEasy />} />
          {/* Placeholder for later */}
          <Route path="/quizzes/label-proficiency/standard" element={<LabelProficiencyStandard />} />
        </Routes>
      </main>
    </div>
  )
}
