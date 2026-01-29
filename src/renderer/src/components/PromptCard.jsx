import { useState } from 'react';
import { Copy, Edit2, Trash2 } from 'lucide-react';
import '../css/PromptCard.css';

const PromptCard = ({ prompt, darkMode, onEdit, onDelete }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`prompt-card ${darkMode ? 'dark' : 'light'}`}>
      <div className="prompt-header">
        <h4 className="prompt-title">{prompt.title}</h4>
        <span className="prompt-category">{prompt.category}</span>
      </div>
      <p className="prompt-preview">{prompt.text}</p>
      <div className="prompt-actions">
        <button
          onClick={copyToClipboard}
          className="btn-copy"
        >
          <Copy size={14} />
           {copied ? 'Copied!' : 'Copy'}
        </button>
        <button
          onClick={onEdit}
          className={`btn-edit ${darkMode ? 'dark' : 'light'}`}
        >
          <Edit2 size={14} />
        </button>
        <button
          onClick={onDelete}
          className="btn-delete"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default PromptCard;
