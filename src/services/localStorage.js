export const saveDataToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error(error);
  }
};

export const getDataFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return null; // Дані не знайдено
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error(error);
    return null;
  }
};
