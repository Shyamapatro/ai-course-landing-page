import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { lazy, Suspense } from 'react';

const Features = lazy(() => import('./components/Features'));
const Courses = lazy(() => import('./components/Courses'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const ForgotPassword = lazy(() => import('./components/ForgotPassword'));

function App() {
  return (
    <AuthProvider>
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
                  <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading sections...</div>}>
                    <Features />
                    <Courses />
                    <Pricing />
                    <Testimonials />
                    <FAQ />
                  </Suspense>
                </main>
                <Suspense fallback={null}>
                  <Footer />
                </Suspense>
              </div>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
