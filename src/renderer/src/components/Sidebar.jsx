import { LayoutDashboard, Zap, FileText, Info, Moon, Sun, Plus, CircleHelp } from 'lucide-react';
import '../css/Sidebar.css';

const Sidebar = ({ darkMode, setDarkMode, currentScreen, setCurrentScreen, setEditingPrompt, isOpen, setSidebarOpen, isMini, setIsMini }) => {
  const handleNewPrompt = () => {
    setCurrentScreen('form');
    setEditingPrompt(null);
  };

  return (
    <div className={`sidebar ${darkMode ? 'dark' : 'light'} ${isOpen ? 'open' : 'closed'} ${isMini ? 'mini' : ''}`}>
      <div className="sidebar-header">
         <div className="logo">
           <span>P</span>
         </div>
         {!isMini && <h1>Prompt Wallet</h1>}
         <button 
           className="btn-toggle-mini"
           onClick={() => setIsMini(!isMini)}
           title={isMini ? 'Expand sidebar' : 'Collapse sidebar'}
         >
           {isMini ? '→' : '←'}
         </button>
         </div>

      <nav className="sidebar-nav">
        <button
           onClick={() => setCurrentScreen('dashboard')}
           className={`nav-btn ${currentScreen === 'dashboard' ? 'active' : ''}`}
           title="Dashboard"
         >
          <LayoutDashboard size={18} />
         {!isMini && <span>Dashboard</span>}
         </button>
        <button
          onClick={() => setCurrentScreen('use')}
          className={`nav-btn ${currentScreen === 'use' ? 'active' : ''}`}
          title="Use Prompt"
        >
          <Zap size={18} />
          {!isMini && <span>Use Prompt</span>}
        </button>

        {!isMini && (
          <div className="nav-divider">
            <p>Info</p>
          </div>
        )}

        <button
           onClick={() => setCurrentScreen('terms')}
           className={`nav-btn ${currentScreen === 'terms' ? 'active' : ''}`}
           title="Terms of Use"
         >
           <Info size={18} />
           {!isMini && <span>Terms of Use</span>}
         </button>

        <button
           onClick={() => setCurrentScreen('about')}
           className={`nav-btn ${currentScreen === 'about' ? 'active' : ''}`}
           title="About"
         >
           <CircleHelp size={18} />
           {!isMini && <span>About</span>}
         </button>
        </nav>

      <div className="sidebar-footer">
        <button
          onClick={handleNewPrompt}
          className="btn-new-prompt"
          title="New Prompt"
        >
          <Plus size={18} />
          {!isMini && <span>New Prompt</span>}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn-theme"
          title={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {!isMini && <span>{darkMode ? 'Light' : 'Dark'}</span>}
        </button>
        {!isMini && <p className="keyboard-shortcuts">Ctrl+N: New | Ctrl+D: Dashboard</p>}

        </div>
    </div>
  );
};

export default Sidebar;
