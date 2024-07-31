"use client"
import React, { useState } from 'react';
import Login from './(auth)/login';
import Register from './(auth)/register';

const MainPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
      <div className="w-full max-w-xs">
        {isLogin ? <Login /> : <Register />}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
