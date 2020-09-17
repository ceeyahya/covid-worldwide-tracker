export function formatNumber(nbr) {
  return nbr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
