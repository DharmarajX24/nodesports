export const unixToMaterialUi = (unixDate) =>
  new Date(new Date(unixDate).toString())
    .toISOString()
    .split(".")[0]
    .slice(0, -3);

export const materialUiToUnix = (materialUiDate) =>
  new Date(materialUiDate + ":00").getTime();
