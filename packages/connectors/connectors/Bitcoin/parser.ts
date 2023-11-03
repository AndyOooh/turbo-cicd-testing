export const parseHolding = (holding: any) => {
  return {
    currency: 'BTC',
    amount: holding.balance / 100000000,
  };
};
