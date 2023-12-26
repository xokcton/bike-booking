export const formatErrors = (error) => {
  return error.response.data.errors.map((elem) => `${elem.path}: ${elem.msg}`).join('|');
};
