import React from "react";
import Navbar from "./components/Partials/Navbar"; // Sesuaikan path dengan struktur proyek Anda

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 CodeTyper. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
