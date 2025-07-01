import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import AudioPlayer from './components/AudioPlayer';
import BeachBackground from './components/BeachBackground';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <BeachBackground />
          <div className="app-container">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
                <Route path="/playlist/:id" element={<Playlist />} />
              </Routes>
            </main>
          </div>
          <AudioPlayer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
