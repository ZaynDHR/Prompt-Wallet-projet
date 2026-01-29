import { useState } from 'react';
import '../css/PromptForm.css';

const PromptForm = ({ darkMode, categories, onSubmit, onCancel, editingPrompt }) => {
  const [title, setTitle] = useState(editingPrompt?.title || '');
  const [text, setText] = useState(editingPrompt?.text || '');
  const [category, setCategory] = useState(editingPrompt?.category || categories[0]);
  const [dynamicFields, setDynamicFields] = useState(editingPrompt?.dynamicFields || []);

  const handleSubmit = () => {
    if (!title.trim() || !text.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit({ title, text, category, dynamicFields });
  };

  const addDynamicField = () => {
    const fieldName = window.prompt('Enter field name (e.g., "language", "topic"):');
    if (fieldName && fieldName.trim()) {
      const cleanField = fieldName.trim();
      setDynamicFields([...dynamicFields, cleanField]);
      setText(text + ` [${cleanField}]`);
    }
  };

  const removeDynamicField = (field) => {
    setDynamicFields(dynamicFields.filter(f => f !== field));
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
            onChange={(e) => setTitle(e.target.value.slice(0, 10))}
            maxLength="10"
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
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`form-select ${darkMode ? 'dark' : 'light'}`}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Dynamic Fields</label>
          <p className="form-hint">These fields can be customized each time you use the prompt</p>
          {dynamicFields.length > 0 && (
            <div className="fields-container">
              {dynamicFields.map((field, i) => (
                <span key={i} className="field-tag">
                  [{field}]
                  <button
                    type="button"
                    onClick={() => removeDynamicField(field)}
                    className="field-remove"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={addDynamicField}
            className={`btn-add-field ${darkMode ? 'dark' : 'light'}`}
          >
            + Add Dynamic Field
          </button>
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
