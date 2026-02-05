import '../css/Info.css';

const About = ({ darkMode }) => {
  return (
    <div className="info-page">
      <h2>About Prompt Wallet</h2>
      <div className={`info-content ${darkMode ? 'dark' : 'light'}`}>
        <section>
          <h3>Project Overview</h3>
          <p>Prompt Wallet is a desktop application designed to help developers, content creators, and AI enthusiasts manage and organize their AI prompts efficiently. The application provides a local-first solution for storing, searching, and utilizing custom prompts without requiring cloud connectivity.</p>
        </section>

        <section>
          <h3>About the Developer</h3>
          <p>This project was developed as part of the CDA (Certificat de Développeur d'Applications) 2ème année program at L'École Multimédia, a premier institution for digital education and web development.</p>
        </section>

        <section>
          <h3>Development Context</h3>
          <p><strong>Client:</strong> EverydayLLM - An innovative startup focused on making AI accessible to developers.</p>
          <p><strong>Project Type:</strong> Team project developed in collaboration with fellow developers.</p>
          <p><strong>Objective:</strong> Create a user-friendly prompt management tool that combines local storage with a modern user interface.</p>
        </section>

        <section>
          <h3>Technology Stack</h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li><strong>Desktop Framework:</strong> Electron</li>
            <li><strong>UI Library:</strong> React with Hooks</li>
            <li><strong>Build Tool:</strong> Electron Vite & Vite</li>
            <li><strong>Icons:</strong> Lucide React</li>
            <li><strong>Storage:</strong> Browser LocalStorage (Offline-First)</li>
            <li><strong>Styling:</strong> CSS3 with Dark/Light themes</li>
          </ul>
        </section>

        <section>
          <h3>Key Features</h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>Local data storage with no internet required</li>
            <li>Create, edit, and delete prompts</li>
            <li>Organize prompts by categories</li>
            <li>Search and filter functionality</li>
            <li>Dynamic field system for customizable prompts</li>
            <li>Dark and light mode support</li>
            <li>Collapsible sidebar for optimized workspace</li>
            <li>Drag & drop to import prompts from .txt files</li>
            <li>Copy prompts to clipboard</li>
          </ul>
        </section>

        <section>
          <h3>Privacy & Data</h3>
          <p>Prompt Wallet is completely offline-first. All data is stored locally on your device using browser storage. We do not collect, transmit, or store any of your data on external servers. Your prompts are yours and remain entirely private.</p>
        </section>

        <section>
          <h3>Target Platform</h3>
          <p>Prompt Wallet is built as a cross-platform desktop application using Electron, supporting Windows, macOS, and Linux operating systems.</p>
        </section>

        <section>
          <h3>Development Process</h3>
          <p>This project follows agile development principles with regular commits, code reviews, and collaborative development practices. The codebase is well-organized, documented, and follows React and JavaScript best practices.</p>
        </section>

        <section className="footer-section">
          <p className="last-updated">Version 1.0.0 - January 2025</p>
          <p className="copyright">© 2025 EverydayLLM - Developed at L'École Multimédia</p>
        </section>
      </div>
    </div>
  );
};

export default About;
