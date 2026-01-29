import '../css/StatCard.css';

const StatCard = ({ darkMode, title, value }) => {
  return (
    <div className={`stat-card ${darkMode ? 'dark' : 'light'}`}>
      <p className="stat-title">{title}</p>
      <p className="stat-value">{value}</p>
    </div>
  );
};

export default StatCard;
