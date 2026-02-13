import { useState } from 'react';
import { Search, Plus, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import StatCard from '../components/StatCard';
import PromptCard from '../components/PromptCard';
import '../css/Dashboard.css';

const Dashboard = ({
  darkMode,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredPrompts,
  setCurrentScreen,
  setEditingPrompt,
  deletePrompt,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const stats = categories.reduce((acc, cat) => {
    acc[cat] = filteredPrompts.filter(p => p.category === cat).length;
    return acc;
  }, {});

  const totalPages = Math.ceil(filteredPrompts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPrompts = filteredPrompts.slice(startIndex, endIndex);

  const recentPrompts = filteredPrompts.slice(-6);

  const handleNewPrompt = () => {
    setCurrentScreen('form');
    setEditingPrompt(null);
  };

  const handleEditPrompt = (prompt) => {
    setEditingPrompt(prompt);
    setCurrentScreen('form');
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={handleNewPrompt} className="btn-new">
           <Plus size={18} />
           New Prompt
         </button>
      </div>

      <div className="dashboard-content">
        <div className="categories-section">
          <h3>Your Categories</h3>
          <div className="category-buttons">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="stats-grid">
            {categories.map(cat => (
              <StatCard 
                key={cat}
                darkMode={darkMode} 
                title={`Prompts ${cat}`} 
                value={stats[cat] || 0} 
              />
            ))}
          </div>
        </div>

        <div className="search-section">
          <h3>Recent Prompts</h3>
          <div className={`search-container ${darkMode ? 'dark' : 'light'}`}>
            <Search className="search-icon" size={18} />
             <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="recent-list">
            {recentPrompts.length === 0 ? (
              <p className="empty-recent">No prompts yet. Create your first one!</p>
            ) : (
              recentPrompts.map(prompt => (
                <div
                  key={prompt.id}
                  className="recent-item"
                  onClick={() => handleEditPrompt(prompt)}
                >
                  <p className="recent-title">{prompt.title}</p>
                  <p className="recent-category">{prompt.category}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <h3 className="all-prompts-title">All Prompts</h3>
      {filteredPrompts.length === 0 ? (
         <div className={`empty-state ${darkMode ? 'dark' : 'light'}`}>
          <Upload size={48} className="upload-icon" />
           <p className="empty-text">No prompts found</p>
          <p className="empty-subtext">Create a new prompt or drag & drop a .txt file here</p>
        </div>
      ) : (
        <>
          <div className="prompts-grid">
            {paginatedPrompts.map(prompt => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                darkMode={darkMode}
                onEdit={() => handleEditPrompt(prompt)}
                onDelete={() => deletePrompt(prompt.id)}
                onUse={() => setCurrentScreen('use')}
              />
            ))}
          </div>

          <div className={`pagination ${darkMode ? 'dark' : 'light'}`}>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="pagination-btn"
              title="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="pagination-info">
              <span>Page {currentPage} of {totalPages}</span>
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="pagination-btn"
              title="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
