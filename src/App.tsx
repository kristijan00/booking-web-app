import { Route, Routes, Navigate } from 'react-router-dom';
import './themes/variables.css';
import './index.css';
import Home from './pages/home/home';
// import Login from './pages/login/login';
import About from './pages/about/about';
import Header from './components/header/header';
import Contact from './pages/contact/contact';
import Price from './pages/price/price';

const App: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </>
  );
};

export default App;