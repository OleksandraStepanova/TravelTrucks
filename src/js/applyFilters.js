export function applyFilters() {
  const location =
    document.querySelector('#location')?.value.toLowerCase() || '';

  const activeFilters = [
    ...document.querySelectorAll('.container-filters.active-filter'),
  ].map(filter => filter.id);

  const vehicleType =
    document.querySelector('input[name="vehicleType"]:checked')?.value || '';

  console.log('Filter by:', { location, activeFilters, vehicleType });

  filterCampers(location, activeFilters, vehicleType);
}
