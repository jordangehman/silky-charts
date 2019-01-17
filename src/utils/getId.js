let innerId = 0;

export default prefix => {
  if (!prefix) {
    return null;
  }

  const id = `silky-charts_${prefix}-${innerId}`;
  innerId += 1;
  return id;
};
