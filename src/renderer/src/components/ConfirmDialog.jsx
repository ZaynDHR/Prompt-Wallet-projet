import '../css/ConfirmDialog.css';

const ConfirmDialog = ({ isOpen, title, message, onConfirm, onCancel, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay">
      <div className={`confirm-dialog ${darkMode ? 'dark' : 'light'}`}>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="confirm-actions">
          <button 
            onClick={onCancel} 
            className={`btn-cancel-dialog ${darkMode ? 'dark' : 'light'}`}
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="btn-confirm-delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
