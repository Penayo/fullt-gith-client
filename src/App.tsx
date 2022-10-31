import React from 'react';
import './App.css';
import { AppSidebar } from './components/app-sidebar';
// import { MainMenu } from './components/main-menu';
import {
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Commits from './pages/commits'

function App() {
  return (
    <div className="container">
      <div className="flex">
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-none border-r">
          <div className="flex flex-col mt-6">
            <div className="flex">
              <div className="flex flex-col mt-6">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="ml-5 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
              </div>
              <div className="w-full h-full p-4 m-8">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </div>
            </div>
            <AppSidebar />
          </div>
        </div>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="w-full p-40 border-4 border-dotted">
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/commits/:branchName" element={<Commits />} />
              </Routes>
            </main>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
