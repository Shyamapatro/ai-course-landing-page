import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="noise-bg" />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-dark text-white overflow-x-hidden relative">
            <Navbar />
            <main>
              <Hero />
              <Features />
              <Courses />
              <Pricing />
              <Testimonials />
              {/* Sections will go here */}
            </main>
            <Footer />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
