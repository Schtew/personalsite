import './App.css';
// import 'public/foirdlands.jpg';
import Header from './Header';
import HackathonsPage from './hackathons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import researchPage from './research';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/hackathons" element={HackathonsPage} />
          <Route path="/research" element={researchPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
