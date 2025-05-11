import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>메안</div>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
