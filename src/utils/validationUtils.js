function checkIfHaveOnlyNumbers(param) {
  return /^\d+$/.test(param);
}

const validationUtils = {
  checkIfHaveOnlyNumbers,
};

export default validationUtils;
