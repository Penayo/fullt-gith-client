import React, { useState } from 'react';
import './App.css';
import { AppSidebar } from './components/app-sidebar';
import { MainMenu } from './components/main-menu';
import {
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Commits from './pages/commits'

function App() {
  const [repository, setRepository] = useState('fullt-repo-admin')

  return (
    <div className="container">
      <MainMenu repository={repository} onSelectRepo={(repositoryName: string) => setRepository(repositoryName)}/>
      <div className="flex">
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-none border-r">
          <div className="flex flex-col mt-6">
            <AppSidebar repository={repository} />
          </div>
        </div>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="w-full p-40 border-4 border-dotted">
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/commits/:branchName" element={<Commits repository={repository} />} />
              </Routes>
            </main>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
