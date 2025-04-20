export const StorageService = {
  get: (key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        console.error(`Error parsing value for key "${key}":`, e);
        return null;
      }
    }
    return null;
  },
  set: (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
