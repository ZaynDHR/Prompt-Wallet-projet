/**
 * @file App.jsx - Root application component
 * @description Main component managing app state, routing, and data persistence
 * @author Development Team at L'École Multimédia
 * @version 1.0.0
 */

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PromptForm from './pages/PromptForm';
import UsePrompt from './pages/UsePrompt';
import TermsOfUse from './pages/TermsOfUse';
import About from './pages/About';
import storage from './storage';
import './css/App.css';

/**
 * Default prompts loaded on first launch
 * @type {Array<{id: number, title: string, text: string, category: string, dynamicFields: string[]}>}
 */
const defaultPrompts = [
  { id: 1, title: 'Product Launch Campaign', text: 'Create a compelling marketing campaign for a new product launch targeting {audience}', category: 'Marketing', dynamicFields: ['audience'] },
  { id: 2, title: 'Blog Post Outline', text: 'Write a detailed outline for a blog post about {topic} in 2000 words', category: 'Création de Contenu', dynamicFields: ['topic'] },
  { id: 3, title: 'E-commerce Description', text: 'Create a persuasive product description for {product} that highlights {features}', category: 'E-commerce', dynamicFields: ['product', 'features'] },
  { id: 4, title: 'API Documentation', text: 'Generate comprehensive API documentation for {endpoint} with examples', category: 'Développement', dynamicFields: ['endpoint'] },
  { id: 5, title: 'Social Media Strategy', text: 'Develop a social media strategy for {brand} focusing on {platform}', category: 'Marketing', dynamicFields: ['brand', 'platform'] },
  { id: 6, title: 'Email Newsletter', text: 'Write an engaging email newsletter for {company} about {topic}', category: 'Création de Contenu', dynamicFields: ['company', 'topic'] },
  { id: 7, title: 'Product Listing', text: 'Create {quantity} unique product listings for {category} with SEO optimization', category: 'E-commerce', dynamicFields: ['quantity', 'category'] },
  { id: 8, title: 'Code Review', text: 'Review this {language} code and suggest improvements: {code}', category: 'Développement', dynamicFields: ['language', 'code'] },
  { id: 9, title: 'Brand Voice Guide', text: 'Define the brand voice for {brand} in {industry} industry', category: 'Marketing', dynamicFields: ['brand', 'industry'] },
  { id: 10, title: 'Video Script', text: 'Write a script for a {duration} video about {topic} for {audience}', category: 'Création de Contenu', dynamicFields: ['duration', 'topic', 'audience'] },
  { id: 11, title: 'Pricing Strategy', text: 'Develop a pricing strategy for {product} in {market} targeting {audience}', category: 'E-commerce', dynamicFields: ['product', 'market', 'audience'] },
  { id: 12, title: 'Database Schema', text: 'Design a database schema for {application} with {tables} tables', category: 'Développement', dynamicFields: ['application', 'tables'] },
  { id: 13, title: 'Influencer Outreach', text: 'Create an outreach message for {influencer} to promote {product}', category: 'Marketing', dynamicFields: ['influencer', 'product'] },
  { id: 14, title: 'Content Calendar', text: 'Create a {month} content calendar for {platform} with {posts} posts', category: 'Création de Contenu', dynamicFields: ['month', 'platform', 'posts'] },
  { id: 15, title: 'Conversion Optimization', text: 'Suggest improvements to increase conversion rate on {page} by {target}%', category: 'E-commerce', dynamicFields: ['page', 'target'] },
  { id: 16, title: 'Bug Fix Guide', text: 'Provide a step-by-step guide to fix {bug} in {application} using {technology}', category: 'Développement', dynamicFields: ['bug', 'application', 'technology'] }
];

/**
 * Initialize prompts from storage or use defaults
 * @returns {Array} Initial prompts array
 */
const getInitialPrompts = () => {
  const stored = storage.data;
  return stored || defaultPrompts;
};

/**
 * Main App Component
 * Manages application state, routing, and core business logic
 * @component
 * @returns {React.ReactElement} Root application element
 */
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [prompts, setPrompts] = useState(getInitialPrompts());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [editingPrompt, setEditingPrompt] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarMini, setSidebarMini] = useState(true);

  useEffect(() => {
    storage.save(prompts);
  }, [prompts]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        setCurrentScreen('form');
        setEditingPrompt(null);
      }
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        setCurrentScreen('dashboard');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  /**
   * Handle drag over event for file import
   * @param {React.DragEvent} e - Drag event
   */
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /**
   * Handle file drop event to import prompts from .txt files
   * Reads file content and creates new prompt
   * @param {React.DragEvent} e - Drop event
   */
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        setEditingPrompt({ 
          title: file.name.replace('.txt', ''), 
          text, 
          category: 'Marketing',
          dynamicFields: []
        });
        setCurrentScreen('form');
      };
      reader.readAsText(file);
    }
  };

  /**
   * Add a new prompt or update existing prompt
   * Auto-saves to storage via useEffect
   * @param {Object} prompt - Prompt object to add/update
   * @param {string} prompt.title - Prompt title
   * @param {string} prompt.text - Prompt content
   * @param {string} prompt.category - Prompt category
   * @param {Array<string>} prompt.dynamicFields - Dynamic placeholder fields
   */
  const addPrompt = (prompt) => {
    if (editingPrompt && editingPrompt.id) {
      setPrompts(prompts.map(p => 
        p.id === editingPrompt.id ? { ...prompt, id: editingPrompt.id } : p
      ));
      setEditingPrompt(null);
    } else {
      setPrompts([...prompts, { ...prompt, id: Date.now() }]);
    }
    setCurrentScreen('dashboard');
  };

  /**
   * Delete a prompt with user confirmation
   * @param {number} id - Prompt ID to delete
   */
  const deletePrompt = (id) => {
    if (window.confirm('Are you sure you want to delete this prompt?')) {
      setPrompts(prompts.filter(p => p.id !== id));
    }
  };

  const categories = ['Marketing', 'Création de Contenu', 'E-commerce', 'Développement'];

  const filteredPrompts = prompts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div 
      className={`app ${darkMode ? 'dark' : 'light'}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Sidebar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        setEditingPrompt={setEditingPrompt}
        isOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMini={sidebarMini}
        setIsMini={setSidebarMini}
      />

      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'} ${sidebarMini ? 'sidebar-mini' : ''}`}>
        {!sidebarOpen && (
          <button 
            className="btn-show-sidebar"
            onClick={() => setSidebarOpen(true)}
            title="Show sidebar"
          >
            <Menu size={24} />
            <span className="toggle-text">Toggle Sidebar</span>
          </button>
        )}
        {currentScreen === 'dashboard' && (
          <Dashboard
            darkMode={darkMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            filteredPrompts={filteredPrompts}
            setCurrentScreen={setCurrentScreen}
            setEditingPrompt={setEditingPrompt}
            deletePrompt={deletePrompt}
          />
        )}

        {currentScreen === 'form' && (
          <PromptForm
            darkMode={darkMode}
            categories={categories}
            onSubmit={addPrompt}
            onCancel={() => { 
              setEditingPrompt(null); 
              setCurrentScreen('dashboard'); 
            }}
            editingPrompt={editingPrompt}
          />
        )}

        {currentScreen === 'use' && (
          <UsePrompt
            darkMode={darkMode}
            prompts={prompts}
          />
        )}

        {currentScreen === 'terms' && <TermsOfUse darkMode={darkMode} />}

        {currentScreen === 'about' && <About darkMode={darkMode} />}
      </div>
    </div>
  );
};

export default App;
