export const generateID = () => {
  const randomDigits = () =>
    Math.floor(100000000000000 + Math.random() * 900000000000000).toString();
  return `B${randomDigits()}`;
};
