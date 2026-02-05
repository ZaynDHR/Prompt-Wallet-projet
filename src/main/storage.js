// Storage utility using localStorage as fallback
// electron-store is used in the main process

const STORAGE_KEY = 'prompts';

export const storage = {
  get data() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored || stored === '[]') {
      return null;
    }
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse stored prompts:', e);
      return null;
    }
  },
  
  save(prompts) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
    } catch (e) {
      console.error('Failed to save prompts:', e);
    }
  },
  
  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
};

export default storage;
