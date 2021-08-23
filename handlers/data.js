export const getChanges = (o_data, n_data) => {
  const changedObj = {};
  Object.keys(n_data).forEach((key) => {
    // console.log(n_data[key]);
    if (n_data[key]) {
      if (typeof n_data[key] === "object") {
        if (Array.isArray(n_data[key])) {
          if (n_data[key].length !== o_data[key].length) {
            changedObj[key] = n_data[key];
          } else {
            n_data[key].forEach((item, index) => {
              if (item !== o_data[key][index]) {
                changedObj[key] = n_data[key];
              }
            });
          }
        } else {
          changedObj[key] = getChanges(o_data[key], n_data[key]);
        }
      } else {
        if (o_data[key] !== n_data[key]) {
          changedObj[key] = n_data[key];
        }
      }
    }
  });
  return changedObj;
};
