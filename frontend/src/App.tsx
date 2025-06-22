import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Index from './pages/Index';
import TransactionChecker from './pages/TransactionChecker.tsx';
import TransactionExplanation from './pages/TransactionExplanation';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = () => (
  <div>
    <h1 className="text-3xl font-bold">About Us</h1>
    <p>This is the about page.</p>
  </div>
);

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/check';

  return (
    <>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/check" element={<TransactionChecker />} />
            <Route path="/explanation/:transactionId" element={<TransactionExplanation />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        {showFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
