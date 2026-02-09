import '@testing-library/jest-dom'

// Mock localStorage
const localStorageMock = {
  getItem: (key) => null,
  setItem: (key, value) => {},
  removeItem: (key) => {},
  clear: () => {}
}

global.localStorage = localStorageMock
