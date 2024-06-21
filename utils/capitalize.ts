// capitalize first letter in a given string
export default (str: String) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
