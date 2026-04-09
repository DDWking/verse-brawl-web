/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./components/layout/PublicLayout";
import { AdminLayout } from "./components/layout/AdminLayout";

// Public Pages
import { Home } from "./pages/Home";
import { Intro } from "./pages/Intro";
import { Skills } from "./pages/Skills";
import { Leaderboard } from "./pages/Leaderboard";
import { Announcements } from "./pages/Announcements";
import { Download } from "./pages/Download";
import { About } from "./pages/About";

// Admin Pages
import { Login } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { AdminAnnouncements } from "./pages/admin/AdminAnnouncements";
import { AdminLeaderboard } from "./pages/admin/AdminLeaderboard";
import { AdminGameInfo } from "./pages/admin/AdminGameInfo";
import { AdminSettings } from "./pages/admin/AdminSettings";

// Simple auth guard for demo
const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  // In a real app, check token here
  const isAuthenticated = true; 
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="intro" element={<Intro />} />
          <Route path="skills" element={<Skills />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="download" element={<Download />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<RequireAuth><AdminLayout /></RequireAuth>}>
          <Route index element={<Dashboard />} />
          <Route path="announcements" element={<AdminAnnouncements />} />
          <Route path="leaderboard" element={<AdminLeaderboard />} />
          <Route path="game-info" element={<AdminGameInfo />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
