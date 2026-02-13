import { useState, useEffect } from 'react';
import '../css/PromptForm.css';

const PromptForm = ({ darkMode, categories, onSubmit, onCancel, editingPrompt }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setTitle(editingPrompt?.title || '');
    setText(editingPrompt?.text || '');
    setCategory(editingPrompt?.category || categories[0] || '');
  }, [editingPrompt, categories]);
  const handleSubmit = () => {
    if (!title.trim() || !text.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    if (!category.trim()) {
      alert('Please select or enter a category');
      return;
    }
    onSubmit({ title, text, category: category.trim(), dynamicFields: [] });
  };

  return (
    <div className="prompt-form">
      <h2>{editingPrompt ? 'Edit Prompt' : 'Create / Edit a Prompt'}</h2>

      <div className="form-space">
        <div className="form-group">
          <label htmlFor="title">Prompt Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your prompt a descriptive title (e.g., 'SEO Blog Post Generator')"
            className={`form-input ${darkMode ? 'dark' : 'light'}`}
          />
        </div>

        <div className="form-group">
          <label htmlFor="text">Prompt Text *</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a clear description for your prompt. Example: You are a content creation expert. Create a blog post about [topic] in [language]."
            rows={12}
            className={`form-textarea ${darkMode ? 'dark' : 'light'}`}
          />
          <p className="form-tip">Tip: Use [fieldname] to create dynamic fields that can be filled later</p>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            list="category-suggestions"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Choose or type a custom category"
            className={`form-input ${darkMode ? 'dark' : 'light'}`}
          />
          <datalist id="category-suggestions">
            {categories.map(cat => (
              <option key={cat} value={cat} />
            ))}
          </datalist>
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleSubmit} className="btn-submit">
            {editingPrompt ? 'Update' : 'Create'}
          </button>
          <button type="button" onClick={onCancel} className={`btn-cancel ${darkMode ? 'dark' : 'light'}`}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptForm;
