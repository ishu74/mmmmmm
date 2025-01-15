import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AdminPage from './components/Admin';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/Register';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
