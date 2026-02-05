# Contributing to Prompt Wallet

## Project Information

**Project**: Prompt Wallet  
**Institution**: L'École Multimédia  
**Program**: CDA (Certificat de Développeur d'Applications) 2ème Année  
**Client**: EverydayLLM Startup  
**Type**: Team Project (Binôme/Pair Work)

---

## Development Team

This is a collaborative project requiring regular commits from all team members. Each developer must contribute meaningfully to the codebase.

### Team Requirements
- **Regular commits**: At least 5-10 commits per developer per sprint
- **Clear commit messages**: Follow conventional commits (feat, fix, refactor, docs, etc.)
- **Code review**: All major features should be reviewed by team member
- **Documentation**: Update docs when adding features

---

## Getting Started

### Prerequisites
- Node.js v14+
- npm or yarn
- Git
- VSCode (recommended)

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd electron-app

# Install dependencies
npm install

# Configure git (each developer)
git config user.name "Your Name"
git config user.email "your.email@ecole-multimedia.fr"

# Start development
npm run dev
```

### First Time Setup Checklist
- [ ] Clone repository
- [ ] Install dependencies
- [ ] Configure git user info
- [ ] Run `npm run dev`
- [ ] Verify app launches
- [ ] Read README.md
- [ ] Read TECHNICAL_DESIGN.md

---

## Development Workflow

### 1. Feature Development

**Create a feature branch**:
```bash
git checkout -b feature/sidebar-improvements
```

**Naming convention**:
- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `style/` - CSS/styling changes

### 2. Making Changes

1. **Edit code** in your feature branch
2. **Test changes** locally with `npm run dev`
3. **Run linter**: `npm run lint`
4. **Format code**: `npm run format`

### 3. Committing Changes

**Conventional Commits Format**:
```
feat: Add dark mode toggle
fix: Resolve sidebar collapse bug
refactor: Optimize filter logic
docs: Update README with examples
style: Fix button alignment
```

**Good commit examples**:
```bash
git commit -m "feat: Implement dynamic field system for prompts"
git commit -m "fix: Correct pagination calculation for large datasets"
git commit -m "refactor: Extract filter logic into utility function"
git commit -m "docs: Add API documentation to PromptForm component"
```

**Bad commit examples**:
```bash
git commit -m "update"
git commit -m "fixed stuff"
git commit -m "changes"
```

### 4. Code Review

Before pushing, ensure:
- ✅ Code follows project style (ESLint passes)
- ✅ No console errors
- ✅ Features work as intended
- ✅ Related tests pass
- ✅ Documentation is updated
- ✅ Commit messages are clear

### 5. Pushing and Pull Requests

```bash
git push origin feature/your-feature-name
```

Create a Pull Request with:
- **Title**: Clear, descriptive title
- **Description**: What changes were made and why
- **Related Issue**: Link to issue if applicable
- **Checklist**: Confirm testing, linting, etc.

---

## Code Standards

### File Organization
```
src/
├── renderer/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page/screen components
│   │   ├── css/              # Stylesheets
│   │   ├── App.jsx           # Root component
│   │   └── storage.js        # Storage utility
│   └── index.html
└── main/
    └── index.js              # Electron main process
```

### Naming Conventions

**Components** (PascalCase):
```javascript
// ✅ Good
function PromptCard() {}
function UserProfile() {}
export default Dashboard;

// ❌ Bad
function promptCard() {}
function user_profile() {}
export default dashboard;
```

**Variables & Functions** (camelCase):
```javascript
// ✅ Good
const userEmail = 'user@example.com';
function handleSubmit() {}
const filteredPrompts = [];

// ❌ Bad
const UserEmail = 'user@example.com';
function HandleSubmit() {}
const filtered_prompts = [];
```

**Constants** (UPPER_SNAKE_CASE):
```javascript
// ✅ Good
const MAX_PROMPT_LENGTH = 5000;
const API_TIMEOUT = 3000;
const DEFAULT_CATEGORY = 'Marketing';

// ❌ Bad
const maxPromptLength = 5000;
const apiTimeout = 3000;
```

### Code Style

**Use JSDoc for functions**:
```javascript
/**
 * Add a new prompt to the library
 * @param {Object} prompt - The prompt to add
 * @param {string} prompt.title - Prompt title
 * @param {string} prompt.text - Prompt content
 * @returns {void}
 */
function addPrompt(prompt) {
  // Implementation
}
```

**Use arrow functions for callbacks**:
```javascript
// ✅ Good
const handleClick = () => {
  setCount(count + 1);
};

// ⚠️ Less preferred for callbacks
function handleClick() {
  setCount(count + 1);
}
```

**Keep functions small and focused**:
```javascript
// ✅ Good - Single responsibility
const filterByCategory = (prompts, category) => {
  return prompts.filter(p => p.category === category);
};

const searchPrompts = (prompts, query) => {
  return prompts.filter(p => 
    p.title.includes(query) || p.text.includes(query)
  );
};

// ❌ Bad - Multiple responsibilities
const processPrompts = (prompts, category, query) => {
  let result = prompts;
  if (category) {
    result = result.filter(p => p.category === category);
  }
  if (query) {
    result = result.filter(p => 
      p.title.includes(query) || p.text.includes(query)
    );
  }
  return result;
};
```

### CSS Standards

**Use meaningful class names**:
```css
/* ✅ Good */
.prompt-card {
  padding: 1rem;
}

.prompt-card__title {
  font-weight: 600;
}

.prompt-card--featured {
  border: 2px solid purple;
}

/* ❌ Bad */
.card {
  padding: 1rem;
}

.title {
  font-weight: 600;
}

.featured {
  border: 2px solid purple;
}
```

**Use consistent spacing**:
```css
/* ✅ Good */
.button {
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0.375rem;
}

/* ❌ Bad - Inconsistent units */
.button {
  padding: 8px 16px;
  margin-top: 1rem;
  border-radius: 6px;
}
```

---

## Testing

### Manual Testing Checklist

Before committing, test:
- [ ] App starts without errors
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] CRUD operations work (Create, Read, Update, Delete)
- [ ] Search/filter functionality
- [ ] Dark mode toggle
- [ ] Sidebar collapse
- [ ] Responsive on different sizes

### Browser Console

Ensure no errors or warnings:
```bash
# Open DevTools (F12)
# Check Console tab for any errors
# Run `npm run lint` to catch code issues
```

---

## Documentation

### When to Update Documentation

Update these files when:
- Adding new features → Update README.md
- Changing architecture → Update TECHNICAL_DESIGN.md
- Adding new components → Add JSDoc comments
- Changing workflows → Update CONTRIBUTING.md
- Changing user flows → Update USER_MANUAL.md

### Documentation Template

**For new components**:
```javascript
/**
 * @file ComponentName.jsx
 * @description Brief description of what this component does
 * @author Developer Name
 * @example
 * <ComponentName prop1="value" prop2={variable} />
 */

import React from 'react';

/**
 * Brief description
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Prop description
 * @param {function} props.onDelete - Callback function
 * @returns {React.ReactElement}
 */
function ComponentName({ title, onDelete }) {
  // Implementation
}

export default ComponentName;
```

---

## Git Workflow Summary

```
1. Start feature
   git checkout -b feature/my-feature

2. Make changes
   npm run dev
   npm run lint
   npm run format

3. Commit regularly
   git commit -m "feat: description"
   git commit -m "feat: add more functionality"

4. Push when ready
   git push origin feature/my-feature

5. Create Pull Request
   Add description, get review, merge

6. Update main
   git checkout main
   git pull origin main
```

---

## Common Issues

### Issue: Changes not showing up?
**Solution**:
1. Ensure you're on correct branch: `git branch`
2. Save files (Ctrl+S)
3. Restart dev server: `npm run dev`
4. Hard refresh browser: `Ctrl+Shift+R`

### Issue: Merge conflicts?
**Solution**:
1. Pull latest main: `git pull origin main`
2. Resolve conflicts in editor
3. Commit: `git commit -m "fix: resolve merge conflicts"`
4. Push: `git push origin feature/branch`

### Issue: Need to undo changes?
**Solution**:
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo changes to file
git checkout -- path/to/file

# View changes before committing
git diff
```

---

## RNCP Competencies Alignment

This project demonstrates:
- ✅ Front-end development (React, HTML, CSS)
- ✅ Application design (Components, architecture)
- ✅ Data management (State, storage, CRUD)
- ✅ Version control (Git workflow)
- ✅ Collaboration (Team work, documentation)
- ✅ Quality assurance (Testing, linting)

---

## Communication

### Team Coordination

When working on same feature:
1. **Discuss approach** before starting
2. **Divide tasks** clearly
3. **Update team** on progress
4. **Review** each other's code
5. **Merge carefully** to avoid conflicts

### Naming branches with your name

Optionally use your initials:
```bash
git checkout -b JD/feature/new-component
git checkout -b MP/fix/login-bug
```

---

## Deployment

### Building for Release

```bash
# Build application
npm run build

# Build for specific OS
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

Built files go to `dist/` directory.

---

## Resources

- **React Docs**: https://react.dev
- **Electron Docs**: https://www.electronjs.org/docs
- **Git Guide**: https://git-scm.com/book/en/v2
- **Conventional Commits**: https://www.conventionalcommits.org
- **ESLint**: https://eslint.org

---

## Questions?

Refer to:
1. **README.md** - Project overview
2. **TECHNICAL_DESIGN.md** - Architecture & design
3. **USER_MANUAL.md** - Feature documentation
4. **Code comments** - Inline explanations
5. **Team members** - Direct discussion

---

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Created for**: L'École Multimédia CDA Program
