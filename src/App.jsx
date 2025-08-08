import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TemplateChoice from './pages/TemplateChoice';
import Footer from './components/Footer';
import SimpleTemplates from './pages/SimpleTemplates';
import CustomTemplates from './pages/CustomTemplates';
import SimpleTemplate1 from './pages/TemplateEditor/simple/SimpleTemplate1';
import SimpleTemplate2 from './pages/TemplateEditor/simple/SimpleTemplate2';
import CustomTemplate1 from './pages/TemplateEditor/custom/CustomTemplate1';
import CustomTemplate2 from './pages/TemplateEditor/custom/CustomTemplate2';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<TemplateChoice />} />
          <Route path="/create/simple" element={<SimpleTemplates />} />
          <Route path="/create/custom" element={<CustomTemplates />} />
          <Route path="/editor/simple-1" element={<SimpleTemplate1 />} />
          <Route path="/editor/simple-2" element={<SimpleTemplate2 />} />
          <Route path="/editor/custom-1" element={<CustomTemplate1 />} />
          <Route path="/editor/custom-2" element={<CustomTemplate2 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;