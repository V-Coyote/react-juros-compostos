const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatNumber = (value) => {
  return formatter.format(value);
};
