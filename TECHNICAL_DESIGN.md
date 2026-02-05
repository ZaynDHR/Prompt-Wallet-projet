# Technical Design Document - Prompt Wallet

## 1. Architecture Overview

### 1.1 System Architecture
```
┌─────────────────────────────────────────────┐
│         Electron Main Process               │
│  • Window Management                        │
│  • File System Access                       │
│  • electron-store (Data Persistence)        │
└──────────────┬──────────────────────────────┘
               │ IPC (Inter-Process Communication)
┌──────────────▼──────────────────────────────┐
│      React Renderer Process                 │
│  ┌────────────────────────────────────────┐ │
│  │      React Components                  │ │
│  │  • Pages (7 screens)                   │ │
│  │  • Components (3 reusable)             │ │
│  │  • State Management (Hooks)            │ │
│  └────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────┐ │
│  │      Local Storage Layer                │ │
│  │  • localStorage (Browser API)          │ │
│  │  • JSON persistence                    │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### 1.2 Technology Stack
- **Frontend Framework**: React 19.2.1
- **Desktop Runtime**: Electron 39.2.6
- **Build Tool**: Electron Vite 5.0.0 + Vite 7.2.6
- **Package Manager**: npm
- **Runtime**: Node.js (via Electron)
- **Storage**: localStorage + electron-store
- **UI Components**: Lucide React (icons)
- **Styling**: CSS3 (no frameworks)

## 2. Data Flow

### 2.1 State Management
```
App (Root State)
├── darkMode (boolean)
├── isLoggedIn (boolean)
├── currentScreen (string: 'login'|'dashboard'|'form'|'use'|'terms'|'about')
├── prompts (array of Prompt objects)
├── searchQuery (string)
├── selectedCategory (string)
├── editingPrompt (Prompt object | null)
├── sidebarOpen (boolean)
└── sidebarMini (boolean)
```

### 2.2 Data Models

**Prompt Object:**
```javascript
{
  id: number (timestamp),
  title: string,
  text: string,
  category: string ('Marketing'|'Création de Contenu'|'E-commerce'|'Développement'),
  dynamicFields: array of strings (e.g., ['audience', 'topic'])
}
```

**Category:**
```javascript
['Marketing', 'Création de Contenu', 'E-commerce', 'Développement']
```

### 2.3 Data Persistence Flow
```
User Action (Create/Edit/Delete)
    ↓
setPrompts(updatedArray)
    ↓
useEffect Listener (prompts dependency)
    ↓
storage.save(prompts)
    ↓
localStorage.setItem('prompts', JSON.stringify(prompts))
```

## 3. Component Architecture

### 3.1 Component Hierarchy
```
App (Root)
├── Sidebar
│   ├── Logo & Header
│   ├── Navigation Buttons
│   │   ├── Dashboard
│   │   ├── Use Prompt
│   │   ├── Terms of Use
│   │   └── About
│   ├── Footer
│   │   ├── New Prompt Button
│   │   ├── Theme Toggle
│   │   └── Logout Button
│   └── Collapse/Mini Toggle (←/→)
│
├── Main Content Area
│   ├── Dashboard (currentScreen === 'dashboard')
│   │   ├── Search Bar
│   │   ├── Category Filter
│   │   ├── Stats Grid (StatCard x4)
│   │   ├── Prompts Grid
│   │   │   └── PromptCard x N
│   │   └── Pagination
│   │
│   ├── PromptForm (currentScreen === 'form')
│   │   ├── Title Input
│   │   ├── Content TextArea
│   │   ├── Category Select
│   │   ├── Dynamic Fields Manager
│   │   ├── Add Field Button
│   │   └── Submit/Cancel Buttons
│   │
│   ├── UsePrompt (currentScreen === 'use')
│   │   ├── Prompt Selector
│   │   ├── Prompt Display
│   │   ├── Dynamic Field Inputs
│   │   ├── Preview
│   │   └── Copy Button
│   │
│   ├── TermsOfUse (currentScreen === 'terms')
│   ├── About (currentScreen === 'about')
│   └── Login (currentScreen === 'login')
│
└── UI Overlays
    └── Button (Show Sidebar when hidden)
```

### 3.2 Component Props & State

**Sidebar Props:**
```javascript
{
  darkMode, setDarkMode,
  currentScreen, setCurrentScreen,
  setEditingPrompt,
  isOpen, setSidebarOpen,
  isMini, setIsMini,
  onLogout
}
```

**Dashboard Props:**
```javascript
{
  darkMode,
  searchQuery, setSearchQuery,
  selectedCategory, setSelectedCategory,
  categories,
  filteredPrompts,
  setCurrentScreen,
  setEditingPrompt,
  deletePrompt
}
```

## 4. Feature Implementation Details

### 4.1 Prompt CRUD Operations

**Create Prompt:**
1. User clicks "New Prompt"
2. PromptForm renders with empty fields
3. User fills form and submits
4. `addPrompt()` creates new Prompt object with `Date.now()` as ID
5. New prompt added to state: `setPrompts([...prompts, newPrompt])`
6. Auto-saved to localStorage via useEffect
7. Navigation to Dashboard

**Read/Display Prompts:**
1. App loads prompts from localStorage on mount
2. Dashboard filters by category and search query
3. PromptCard components display in grid
4. Cards show: title, category label, edit button, delete button

**Update Prompt:**
1. User clicks prompt card
2. `setEditingPrompt(prompt)` sets state
3. Screen changes to 'form' with pre-filled data
4. `addPrompt()` detects existing `editingPrompt.id`
5. `setPrompts()` maps old prompt to new data
6. Saved to localStorage

**Delete Prompt:**
1. User clicks delete button
2. `window.confirm()` asks for confirmation
3. If confirmed: `setPrompts(prompts.filter(p => p.id !== id))`
4. Auto-saved to localStorage

### 4.2 Search & Filter
```javascript
filteredPrompts = prompts.filter(p => {
  const matchesSearch = 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.text.toLowerCase().includes(searchQuery.toLowerCase());
  
  const matchesCategory = 
    selectedCategory === 'all' || p.category === selectedCategory;
  
  return matchesSearch && matchesCategory;
});
```

### 4.3 Dynamic Fields System
- User enters placeholder syntax: `{fieldName}`
- System extracts field names from text
- When using prompt: renders input fields for each placeholder
- On copy: replaces `{fieldName}` with user input
- Uses regex: `/\{([^}]+)\}/g`

### 4.4 Dark/Light Mode
- Stored in state: `darkMode` boolean
- Applied to body: `document.body.classList.add('dark-mode'|'light-mode')`
- CSS uses `.dark` and `.light` selectors
- Persisted in browser via localStorage (optional enhancement)

### 4.5 Sidebar States
- **Open + Full**: 256px width, shows all text
- **Open + Mini**: 80px width, shows icons only with tooltips
- **Closed**: 0px width, hidden completely
- Smooth transition: 0.4s cubic-bezier animation

## 5. File Organization

```
src/
├── main/
│   ├── index.js (Electron entry point)
│   └── Store.js (electron-store setup)
├── renderer/
│   ├── index.html (HTML template)
│   ├── src/
│   │   ├── App.jsx (Root component)
│   │   ├── main.jsx (React mount)
│   │   ├── storage.js (Storage utility)
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── PromptCard.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── PromptForm.jsx
│   │   │   ├── UsePrompt.jsx
│   │   │   ├── TermsOfUse.jsx
│   │   │   ├── About.jsx
│   │   │   └── Login.jsx
│   │   └── css/
│   │       ├── App.css
│   │       ├── Dashboard.css
│   │       ├── Sidebar.css
│   │       ├── Login.css
│   │       ├── Info.css
│   │       ├── PromptForm.css
│   │       ├── PromptCard.css
│   │       ├── StatCard.css
│   │       └── UsePrompt.css
│   └── public/ (static assets)
└── resources/ (app icons)
```

## 6. Key Algorithms

### 6.1 Pagination
```javascript
const itemsPerPage = 8;
const totalPages = Math.ceil(filteredPrompts.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedPrompts = filteredPrompts.slice(startIndex, endIndex);
```

### 6.2 Dynamic Field Extraction
```javascript
const regex = /\{([^}]+)\}/g;
const fields = [...text.matchAll(regex)].map(match => match[1]);
```

### 6.3 Prompt Replacement
```javascript
let finalText = prompt.text;
dynamicFields.forEach(field => {
  const placeholder = `{${field}}`;
  const userValue = fieldValues[field];
  finalText = finalText.replace(new RegExp(placeholder, 'g'), userValue);
});
```

## 7. Performance Considerations

### 7.1 Rendering Optimization
- Dashboard: Pagination limits DOM nodes (8 cards at a time)
- Sidebar: Mini mode hides text to reduce reflows
- useCallback could be added for event handlers
- useMemo could optimize filtered prompts calculation

### 7.2 Storage Optimization
- Only saves when prompts change (useEffect dependency)
- No real-time sync (batch updates)
- localStorage has ~5-10MB limit (sufficient for 1000+ prompts)

## 8. Security Considerations

### 8.1 Current Implementation
- No authentication backend
- Data stored locally (no transmission)
- No encryption (localStorage is accessible)

### 8.2 Future Improvements
- Add encryption via electron-store options
- Implement proper authentication
- Add session management
- Sanitize dynamic field inputs

## 9. Error Handling

### 9.1 Storage Errors
```javascript
try {
  JSON.parse(stored);
} catch (e) {
  console.error('Parse error');
  return null;
}
```

### 9.2 Potential Issues
- Corrupted localStorage data
- Missing file during import
- Exceed storage limit
- Invalid prompt data structure

## 10. Testing Strategy

### 10.1 Unit Tests
- Storage utility functions
- Filtering logic
- Dynamic field extraction
- Pagination calculations

### 10.2 Integration Tests
- Add prompt → Display in dashboard
- Edit prompt → Update in grid
- Delete prompt → Remove from list
- Filter by category
- Search functionality

### 10.3 E2E Tests (Manual)
- Full user workflow
- Dark mode toggle
- Sidebar collapse
- Drag & drop import

## 11. Future Enhancements

1. Cloud sync (Firebase)
2. Prompt sharing/export (JSON, CSV)
3. Prompt versioning/history
4. Tags system (instead of just categories)
5. Keyboard shortcuts customization
6. Offline-first with background sync
7. Multi-user support
8. Prompt templates/templates marketplace
9. Performance metrics dashboard
10. Undo/Redo functionality

## 12. Development Workflow

### 12.1 Local Development
```bash
npm install
npm run dev
```

### 12.2 Code Quality
```bash
npm run lint
npm run format
```

### 12.3 Building
```bash
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

## 13. Deployment

### 13.1 Build Process
1. Run `npm run build`
2. Electron-builder packages app
3. Creates distributable (exe, dmg, or deb)
4. Outputs to `dist/` directory

### 13.2 Distribution
- Windows: .exe installer via NSIS
- macOS: .dmg disk image
- Linux: AppImage or .deb package

---

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Authors**: Development Team at L'École Multimédia
