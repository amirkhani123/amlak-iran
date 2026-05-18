const { hash, compare } = require("bcryptjs");

const generatePassword = async (password) => {
  const newPassword = await hash(password, 12);
  return newPassword;
};
const isValidFun = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
export { generatePassword, isValidFun };
