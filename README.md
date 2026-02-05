# Prompt Wallet

A desktop application built with Electron and React to manage, organize, and use AI prompts efficiently. Store your prompts locally, categorize them, search through them, and use them whenever you need.

## Overview

Prompt Wallet is a powerful prompt management tool that allows users to:
- Create and save custom prompts
- Organize prompts by categories (Marketing, Content Creation, E-commerce, Development)
- Search and filter prompts
- Edit and delete prompts
- Use prompts with dynamic fields
- Toggle between full and mini sidebar views
- Dark and light mode support
- Drag and drop `.txt` files to import prompts

## Features

### Core Features
- **Prompt Management**: Create, read, update, and delete prompts
- **Categorization**: Organize prompts into 4 default categories
- **Search & Filter**: Find prompts by title, content, or category
- **Local Storage**: All data stored locally on your device (no cloud sync)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Mini Sidebar**: Collapse sidebar to show only icons for more screen space
- **Dynamic Fields**: Support for placeholder fields in prompts (e.g., {audience}, {topic})

### User Interface
- **Dashboard**: View all prompts, recent items, and statistics
- **Prompt Form**: Create and edit prompts with category selection
- **Use Prompt**: Execute prompts with dynamic field replacement
- **Terms of Use**: View application terms and conditions
- **Login**: Simple authentication screen (no cloud authentication)
- **Responsive Design**: Works on different screen sizes

## Tech Stack

- **Desktop Framework**: Electron 39.2.6
- **UI Library**: React 19.2.1
- **Bundler**: Electron Vite 5.0.0
- **Build Tool**: Vite 7.2.6
- **Icons**: Lucide React
- **Styling**: CSS3 with custom themes
- **State Management**: React Hooks (useState, useEffect)

## Project Structure

```
src/
├── main/                    # Electron main process
│   └── index.js            # Main window setup
├── renderer/               # React application
│   ├── index.html          # HTML entry point
│   ├── src/
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # React DOM mount
│   │   ├── components/     # Reusable components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── PromptCard.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── PromptForm.jsx
│   │   │   ├── UsePrompt.jsx
│   │   │   ├── TermsOfUse.jsx
│   │   │   └── Login.jsx
│   │   └── css/            # Stylesheets
│   │       ├── App.css
│   │       ├── Dashboard.css
│   │       ├── Sidebar.css
│   │       ├── Login.css
│   │       └── ...
│   └── public/             # Static assets
└── resources/              # App icons and assets
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Install additional dependencies (if needed):
```bash
npm install lucide-react
```

## Development

### Run Development Server
```bash
npm run dev
```

The app will launch in development mode with hot-reload enabled.

### Build for Production

**Windows:**
```bash
npm run build:win
```

**macOS:**
```bash
npm run build:mac
```

**Linux:**
```bash
npm run build:linux
```

### Linting & Formatting

**Lint code:**
```bash
npm run lint
```

**Format code:**
```bash
npm run format
```

## Usage

1. **Login**: Start with the login screen (any email/password works)
2. **Dashboard**: View your prompts and recent items
3. **Create Prompt**: Click "New Prompt" or press `Ctrl+N`
   - Enter title, content, category, and any dynamic fields
4. **Edit Prompt**: Click on a prompt card to edit
5. **Delete Prompt**: Click delete button on prompt card
6. **Use Prompt**: Go to "Use Prompt" section to fill in dynamic fields
7. **Search**: Use search bar to find prompts by title or content
8. **Filter**: Click category buttons to filter by category
9. **Toggle Sidebar**: Click `←/→` button in sidebar to collapse/expand
10. **Theme**: Click sun/moon icon to toggle dark/light mode

## Keyboard Shortcuts

- `Ctrl+N`: Create new prompt
- `Ctrl+D`: Go to dashboard

## Default Prompts

The app comes with 16 pre-loaded prompts across all categories to help you get started.

## Data Storage

- **Location**: localStorage (browser storage)
- **Privacy**: All data is stored locally on your device
- **No Cloud Sync**: This is a standalone application with no internet connectivity required
- **Backup**: Users should manually backup their data

## Default Settings

- **Theme**: Dark mode enabled
- **Sidebar**: Mini mode enabled (icon-only view)
- **Start Screen**: Login page

## License

This project is provided as-is.

## Support

For issues or feature requests, please refer to the application settings or contact the development team.
