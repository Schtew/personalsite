import './App.css';
// import 'public/foirdlands.jpg';
import Header from './Components/Header';
import HackathonsPage from './Components/HackathonPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResearchPage from './Components/ResearchPage';
import ProfessionalPage from './Components/ProfessionalPage';
import Home from './Components/HomePage';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Router basename='/'>
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hackathons" element={<HackathonsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/professional" element={<ProfessionalPage />} />
          </Routes>
        </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body2" style={{ fontFamily: 'Lora', textAlign: 'center' }}>
              Website written in React, featuring photos from my backpacking adventures.
            </Typography>
          </div>
      </div>
    </Router>
  );
}

export default App;
