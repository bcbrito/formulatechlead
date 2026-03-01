import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import { Toaster } from '@/components/ui/toaster';
import LeadCaptureModal from '@/components/LeadCaptureModal';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Fórmula Tech Lead</title>
        <meta name="description" content="Fórmula Tech Lead - um programa de acompanhamento personalizado para desenvolvedores alavancarem sua carreira, com clareza, suporte, direcionamento e feedback para fazer a transição de executor para Tech Lead de alta performance." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />
        <LeadCaptureModal />
      </div>
    </Router>
  );
}

export default App;