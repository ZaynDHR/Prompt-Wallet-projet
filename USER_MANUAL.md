# Prompt Wallet - User Manual

## Table of Contents
1. [Getting Started](#getting-started)
2. [Login](#login)
3. [Dashboard](#dashboard)
4. [Managing Prompts](#managing-prompts)
5. [Using Prompts](#using-prompts)
6. [Additional Features](#additional-features)
7. [Settings](#settings)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Installation
1. Download the Prompt Wallet installer for your operating system
2. Run the installer and follow the setup wizard
3. The application will launch automatically after installation

### First Launch
When you open Prompt Wallet for the first time:
1. You'll see the login screen
2. Enter any email and password (this is a demo app)
3. Click "Sign In"
4. You'll be taken to the Dashboard with 16 pre-loaded example prompts

---

## Login

### Login Screen
- **Email Field**: Enter any email address
- **Password Field**: Enter any password
- **Sign In Button**: Click to proceed to dashboard
- **Forgot Password Link**: Placeholder for future feature
- **Theme Toggle**: Top-right button to switch dark/light mode

### Demo Credentials
This is a local demo application. Use any credentials:
- Email: `demo@example.com`
- Password: `demo123`

---

## Dashboard

### Dashboard Overview
The dashboard is your main workspace where you can:
- View all your prompts
- Search and filter prompts
- Manage your prompt library
- See statistics

### Dashboard Sections

#### 1. Header
- **Title**: "Dashboard"
- **New Prompt Button**: Create a new prompt (purple button, top right)

#### 2. Categories Section
- **Category Buttons**: Click to filter by category
  - All (shows all prompts)
  - Marketing
  - Création de Contenu
  - E-commerce
  - Développement

- **Statistics Cards**: Shows count of prompts in each category
  - Prompts Marketing
  - Prompts contenu
  - Prompts e-commerce
  - Prompts dev

#### 3. Search Section
- **Search Bar**: Type to find prompts
  - Searches by prompt title
  - Searches by prompt content
  - Results appear in real-time

- **Recent Prompts**: Shows your 6 most recent prompts
  - Click any prompt to edit it
  - Shows prompt title and category

#### 4. Prompts Grid
- **Prompt Cards**: Display all prompts (8 per page)
  - Shows: Title, Category, Preview text
  - **Edit Button**: Pencil icon (edit the prompt)
  - **Delete Button**: Trash icon (delete the prompt)
  - **Copy Button**: Clipboard icon (copy to clipboard)

#### 5. Pagination
- **Previous Button**: Go to previous page (disabled on first page)
- **Page Info**: Shows "Page X of Y"
- **Next Button**: Go to next page (disabled on last page)

---

## Managing Prompts

### Creating a New Prompt

1. **Click "New Prompt"** button on dashboard (or press `Ctrl+N`)

2. **Fill the Form**:
   - **Title**: Give your prompt a descriptive name
     - Example: "Blog Post Outline"
   - **Content**: Write your prompt text
     - Example: "Write a detailed outline for a blog post about {topic}"
   - **Category**: Select from dropdown:
     - Marketing
     - Création de Contenu
     - E-commerce
     - Développement

3. **Add Dynamic Fields** (Optional):
   - Look for placeholders in your text like `{topic}` or `{audience}`
   - Click "Add Field" button
   - Type the field name (without braces): `topic`
   - Click "Add" or press Enter
   - The system will extract these when you use the prompt

4. **Submit**:
   - Click "Save Prompt" button
   - Prompt is automatically saved
   - You'll return to Dashboard

### Editing a Prompt

**Method 1: From Dashboard**
1. Find the prompt on dashboard
2. Click the **Edit button** (pencil icon)
3. Modify any field
4. Click "Save Prompt"

**Method 2: From Recent Prompts**
1. Click the prompt title in "Recent Prompts" section
2. Edit the prompt
3. Save changes

### Deleting a Prompt

1. Find the prompt card on dashboard
2. Click the **Delete button** (trash icon)
3. Confirm deletion in popup:
   - Click "OK" to confirm
   - Click "Cancel" to keep the prompt
4. Prompt is removed from library

---

## Using Prompts

### Accessing Use Prompt

1. Click **"Use Prompt"** in the sidebar
2. Or press `Ctrl+D` then click "Use Prompt"

### Use Prompt Interface

#### 1. Select a Prompt
- Click dropdown or scroll to find your prompt
- Select from the list
- Prompt content appears below

#### 2. View Prompt Details
- **Title**: Shows the prompt name
- **Content**: Shows the full prompt text
- **Dynamic Fields Form**: Shows input fields for any placeholders

#### 3. Fill in Dynamic Fields
If your prompt has placeholders like `{topic}`:
1. You'll see an input field labeled with the field name
2. Type the value you want to substitute
3. Example: If field is "topic", enter "Machine Learning"

#### 4. Preview
- As you type, the final prompt is previewed
- Shows how your prompt will look with substitutions

#### 5. Copy to Clipboard
1. Click "Copy to Clipboard" button (at bottom)
2. Success message appears: "Copied!"
3. Text is ready to paste anywhere:
   - ChatGPT
   - Claude
   - Google Gemini
   - Any text editor

### Example Workflow

**Scenario**: Using "Blog Post Outline" prompt

1. **Create Prompt** (in form):
   - Title: `Blog Post Outline`
   - Content: `Write a detailed outline for a blog post about {topic} in {word_count} words`
   - Category: `Création de Contenu`
   - Dynamic Fields: `topic`, `word_count`

2. **Go to Use Prompt**:
   - Select "Blog Post Outline"
   - Fill in fields:
     - topic: `Artificial Intelligence`
     - word_count: `2000`

3. **Preview** (shows):
   ```
   Write a detailed outline for a blog post about Artificial Intelligence in 2000 words
   ```

4. **Copy & Use**:
   - Click "Copy to Clipboard"
   - Go to ChatGPT
   - Paste the prompt
   - Get your AI-generated outline

---

## Additional Features

### Drag & Drop File Import

1. Create a `.txt` file with your prompt text
2. Open Prompt Wallet dashboard
3. Drag the file onto the dashboard window
4. System automatically:
   - Creates a new prompt
   - Sets title to filename
   - Sets category to "Marketing" (default)
   - Sets content to file text

### Search & Filter Example

**Scenario**: Finding a marketing email prompt

1. Go to dashboard
2. **Option A - Search**:
   - Type "email" in search bar
   - All prompts with "email" in title/content appear

3. **Option B - Filter by Category**:
   - Click "Marketing" category button
   - Only marketing prompts shown

4. **Option C - Combine**:
   - Click "Marketing" category
   - Type "email" in search
   - Shows marketing prompts with "email"

---

## Settings

### Theme Mode

1. Click the **Sun/Moon icon** in sidebar
2. **Dark Mode**: Purple background, light text (default)
3. **Light Mode**: White background, dark text
4. Theme applies to entire app

### Sidebar Toggle

1. Click the **← or → button** in sidebar header
   - `←` when sidebar is expanded (full text visible)
   - `→` when sidebar is collapsed (icons only)

2. **Collapsed Mode** (Mini):
   - Sidebar shows only icons
   - Hover to see tooltip labels
   - Saves screen space
   - Useful on small monitors

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+N` | Create new prompt |
| `Ctrl+D` | Go to Dashboard |

---

## Additional Pages

### Terms of Use
1. Click **"Terms of Use"** in sidebar
2. Read the usage terms and privacy information
3. Important: All data is stored locally on your device
4. No data is sent to external servers

### About
1. Click **"About"** in sidebar
2. View information about:
   - Project overview
   - Development team
   - Technology stack
   - Privacy statement
   - Version information

### Logout
1. Click **"Logout"** button in sidebar footer
2. You'll return to login screen
3. Your prompts are saved locally

---

## Data & Storage

### Where is Data Stored?
- **Location**: Your computer's local storage
- **Windows**: `C:\Users\[YourUsername]\AppData\Local\Electron\...`
- **macOS**: `~/Library/Application Support/Electron/...`
- **Linux**: `~/.config/Electron/...`

### Backup Your Data
Since data is stored locally:
1. Regular backups recommended
2. Export feature (coming soon)
3. Manual backup: Copy application data folder

### No Cloud Sync
- ✅ Offline-first design
- ✅ No internet required
- ✅ Your data stays private
- ❌ No automatic cloud backup
- ❌ No multi-device sync (yet)

---

## Tips & Best Practices

### 1. Organizing Prompts
- **Use clear titles**: "Email Newsletter - Product Launch" instead of "Email"
- **Use categories**: Organize by business function
- **Use descriptions**: Put context in prompt text

### 2. Dynamic Fields
- **Use meaningful names**: `{product_name}` instead of `{field1}`
- **Use consistent braces**: Always use `{fieldName}` syntax
- **Test substitution**: Make sure final text makes sense

### 3. Prompt Quality
- **Be specific**: Detailed prompts get better AI responses
- **Include examples**: Show the AI what you want
- **Use structure**: Numbers, bullet points help AI understand
- **Test prompts**: Use them first before sharing

### 4. Search Tips
- Search is **case-insensitive**: "Email" = "email" = "EMAIL"
- Search looks in **title AND content**: Type key words
- Use **categories first**: Narrow down, then search

### 5. Performance
- Dashboard is fast with pagination (8 items per page)
- 1000+ prompts easily supported
- Search/filter happens instantly
- No slowdown with large libraries

---

## Troubleshooting

### Problem: Can't Login
**Solution**: 
- Try entering email and password again
- Any combination works (it's a demo app)
- Check if CAPS LOCK is on

### Problem: Prompt Doesn't Save
**Solution**:
- Make sure you clicked "Save Prompt" button
- Wait a moment for save to complete
- Check browser console for errors (F12)

### Problem: Can't Find a Prompt
**Solution**:
1. Try different search terms
2. Check different categories
3. Scroll through all pages
4. Check pagination page number

### Problem: Copy to Clipboard Doesn't Work
**Solution**:
1. Check that text was entered in dynamic field forms
2. Try again (sometimes first attempt fails)
3. Use `Ctrl+C` after selecting text manually

### Problem: Dark Mode Not Applying
**Solution**:
1. Click theme toggle again
2. Refresh the application
3. Check if all pages show dark theme

### Problem: Sidebar Won't Expand/Collapse
**Solution**:
1. Click the ← or → button again
2. Try resizing the window
3. Restart the application

### Problem: File Import Not Working
**Solution**:
1. Make sure file is `.txt` format
2. File should contain only text (no special characters)
3. Drag onto the main dashboard area
4. Try creating a simpler test file first

### Problem: Lost Data / App Crashed
**Solution**:
1. Data is automatically saved to localStorage
2. Reopen the app - data should be there
3. If data is lost, previous backups may help
4. Consider implementing regular exports

---

## Feature Requests

### Planned Features
- ✅ Prompt export (JSON/CSV)
- ✅ Prompt versioning
- ✅ Prompt sharing
- ✅ Tags system
- ✅ Cloud sync
- ✅ Mobile app

### Suggest Features
For feature requests, consider:
- Prompt templates marketplace
- AI-powered prompt suggestions
- Prompt analytics (usage tracking)
- Collaborative editing
- Version history
- Integration with AI platforms

---

## Getting Help

### Support Resources
1. **README.md**: Project overview and setup
2. **TECHNICAL_DESIGN.md**: Architecture details
3. **About Page**: Project information
4. **Terms of Use**: Usage guidelines

### Common Issues
- Data loss → Check localStorage
- Performance → Use pagination
- Layout → Try different theme
- Save issues → Check developer console (F12)

---

## Conclusion

Prompt Wallet is designed to be your personal prompt library and management tool. With its simple interface, powerful search, and flexible organization system, you can build and maintain a collection of prompts for any task.

**Happy prompting!**

---

**Manual Version**: 1.0  
**Last Updated**: January 2025  
**Application**: Prompt Wallet v1.0.0
