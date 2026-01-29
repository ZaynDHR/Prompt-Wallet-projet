import Store from 'electron-store'

export const saveToStore =(key, value) => {
  Store.set(key, value)
}

export const loadFromStore =(key) => {
 return Store.get(key)
}