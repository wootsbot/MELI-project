export default function formatPrice(value) {
  const currentValue = parseFloat(value);
  return currentValue?.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
