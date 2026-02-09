/**
 * @file storage.js - Local storage management for prompts
 * @description Handles persistence of prompts to localStorage
 */

const STORAGE_KEY = 'app-prompts';

const storage = {
  /**
   * Get stored prompts data
   * @returns {Array|null} Stored prompts or null if none exist
   */
  get data() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  },

  /**
   * Save prompts to localStorage
   * @param {Array} prompts - Prompts array to save
   */
  save(prompts) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
    } catch (error) {
      console.error('Error saving to storage:', error);
    }
  }
};

export default storage;
