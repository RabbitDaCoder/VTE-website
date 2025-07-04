let nextId = 1;

export const generateID = () => {
  return nextId++;
};

// Reset counter function (useful for testing or when needed)
export const resetIdCounter = (startValue = 1) => {
  nextId = startValue;
};
