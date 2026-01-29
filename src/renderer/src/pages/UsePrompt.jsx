import { useState } from 'react';
import { Copy } from 'lucide-react';
import '../css/UsePrompt.css';

const UsePrompt = ({ darkMode, prompts }) => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [fieldValues, setFieldValues] = useState({});
  const [finalText, setFinalText] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePrompt = () => {
    if (!selectedPrompt) return;
    let text = selectedPrompt.text;

    if (selectedPrompt.dynamicFields && selectedPrompt.dynamicFields.length > 0) {
      selectedPrompt.dynamicFields.forEach(field => {
        const value = fieldValues[field] || `[${field}]`;
        text = text.replace(new RegExp(`\\[${field}\\]`, 'g'), value);
      });
    }

    setFinalText(text);
  };

  const copyFinal = () => {
    navigator.clipboard.writeText(finalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePromptSelect = (e) => {
    const prompt = prompts.find(p => p.id === parseInt(e.target.value));
    setSelectedPrompt(prompt);
    setFieldValues({});
    setFinalText('');
  };

  return (
    <div className="use-prompt">
      <h2>Use a Prompt</h2>

      <div className="form-space">
        <div className="form-group">
          <label htmlFor="prompt-select">Select a Prompt</label>
          <select
            id="prompt-select"
            onChange={handlePromptSelect}
            className={`form-select ${darkMode ? 'dark' : 'light'}`}
          >
            <option value="">Choose a prompt from your library...</option>
            {prompts.map(p => (
              <option key={p.id} value={p.id}>{p.title} ({p.category})</option>
            ))}
          </select>
        </div>

        <div className="prompt-containers">
          <div className="container-column">
            {selectedPrompt && (
              <div className={`original-prompt ${darkMode ? 'dark' : 'light'}`}>
                <h3>Original Prompt</h3>
                <p>{selectedPrompt.text}</p>
              </div>
            )}

            {finalText && (
              <div>
                <div className="generated-header">
                  <h3>Generated Prompt</h3>
                  <button
                     onClick={copyFinal}
                     className="btn-copy-final"
                   >
                    <Copy size={16} />
                     {copied ? 'Copied!' : 'Copy to Clipboard'}
                   </button>
                </div>
                <div className={`generated-text ${darkMode ? 'dark' : 'light'}`}>
                  <p>{finalText}</p>
                </div>
              </div>
            )}
          </div>

          <div className="container-column">
            {selectedPrompt && selectedPrompt.dynamicFields && selectedPrompt.dynamicFields.length > 0 && (
              <div className={`dynamic-fields ${darkMode ? 'dark' : 'light'}`}>
                <h3>Dynamic Fields</h3>
                <div className="fields-input-group">
                  {selectedPrompt.dynamicFields.map(field => (
                    <div key={field} className="form-group">
                      <label htmlFor={`field-${field}`}>[{field}]</label>
                      <input
                        id={`field-${field}`}
                        type="text"
                        value={fieldValues[field] || ''}
                        onChange={(e) => setFieldValues({ ...fieldValues, [field]: e.target.value })}
                        placeholder={`Enter value for ${field}`}
                        className={`form-input ${darkMode ? 'dark' : 'light'}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={generatePrompt}
                  className="btn-generate"
                >
                  Generate Prompt
                </button>
              </div>
            )}

            {selectedPrompt && (!selectedPrompt.dynamicFields || selectedPrompt.dynamicFields.length === 0) && (
              <button
                onClick={generatePrompt}
                className="btn-generate btn-full"
              >
                Use This Prompt
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsePrompt;
