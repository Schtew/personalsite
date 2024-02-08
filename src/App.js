import './App.css';
// import 'public/foirdlands.jpg';
import Header from './Components/Header';
import HackathonsPage from './Components/Hackathon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResearchPage from './Components/research';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hackathons" element={<HackathonsPage />} />
            <Route path="/research" element={<ResearchPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
