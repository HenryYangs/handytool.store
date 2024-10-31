export const formatTransferAmount = (amount) => {
  if (String(amount).includes('.')) {
    return amount;
  }

  return `${amount}.00`;
};
