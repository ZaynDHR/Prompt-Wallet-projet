import '../css/Info.css';

const TermsOfUse = ({ darkMode }) => {
  return (
    <div className="info-page">
      <h2>Terms of Use (CGU)</h2>
      <div className={`info-content ${darkMode ? 'dark' : 'light'}`}>
        <section>
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing and using Prompt Wallet, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this application.</p>
        </section>

        <section>
          <h3>2. Local Data Storage</h3>
          <p>All your prompts and data are stored locally on your device. Prompt Wallet does not collect, transmit, or store any of your data on external servers. You are solely responsible for backing up your data.</p>
        </section>

        <section>
          <h3>3. Usage Rights and Ownership</h3>
          <p>You retain all rights to the prompts and content you create within Prompt Wallet. The application is provided as a tool to help you organize and manage your prompts efficiently.</p>
        </section>

        <section>
          <h3>4. Limitation of Liability</h3>
          <p>EverydayLLM and Prompt Wallet are provided "as is" without any warranties. We are not responsible for any loss of data, damages, or issues resulting from the use of this application. Users are encouraged to maintain their own backups.</p>
        </section>

        <section>
          <h3>5. Privacy</h3>
          <p>We respect your privacy. Since all data is stored locally, we have no access to your prompts or personal information. No telemetry or tracking is performed by this application.</p>
        </section>

        <section>
          <h3>6. Updates and Modifications</h3>
          <p>We reserve the right to modify these terms at any time. Continued use of the application following any changes constitutes acceptance of those changes.</p>
        </section>

        <section className="footer-section">
          <p className="last-updated">Last updated: January 2025</p>
          <p className="copyright">© 2025 EverydayLLM - All rights reserved</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
