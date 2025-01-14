// src/renderer/App.tsx
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TitleBar from './components/titlebar';

import './App.css'
import './assets/tailwind.css'
import './assets/input.css'

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <TitleBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 追加ルートはここに記述 */}
        </Routes>
      </div>
    </Router>
  );
}
