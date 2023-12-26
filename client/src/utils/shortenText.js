const limit = 10;

export const shortenText = (text) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};
