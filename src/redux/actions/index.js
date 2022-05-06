export const addItem = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DELETE",
    payload: product,
  };
};
