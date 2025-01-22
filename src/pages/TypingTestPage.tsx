import React from "react";
import TypingTest from "../components/TypingTest"; // Path menyesuaikan dengan struktur proyek Anda
import Layout from "../Layout";

const TypingTestPage: React.FC = () => {
  return (
    <Layout>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
        CodeTyper: Programming Typing Speed Test
      </h1>
        
        <TypingTest />
      </div>
    </div>
    </Layout>
  );
};

export default TypingTestPage;
