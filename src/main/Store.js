import Store from 'electron-store';

const store = new Store();

export const saveToStore = (key, value) => {
  store.set(key, value);
};

export const loadFromStore = (key) => {
  return store.get(key);
};

export const deleteFromStore = (key) => {
  store.delete(key);
};

export default store;
