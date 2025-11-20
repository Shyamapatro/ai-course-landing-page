import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const ForgotPassword = lazy(() => import('./components/ForgotPassword'));

function App() {
  return (
    <Router>
      <div className="noise-bg" />
      <Suspense fallback={
        <div className="min-h-screen bg-dark flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }>
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
                <FAQ />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
