export function applyFilters(allCampers) {
    const location =
      document.querySelector('#location')?.value.toLowerCase() || '';
  
    const activeFilters = [
      ...document.querySelectorAll('.container-filters.active-filter'),
    ].map(filter => filter.id);
  
    const vehicleType =
      document.querySelector('input[name="vehicleType"]:checked')?.value || '';
  
    return allCampers.filter(camper => {
      const matchesLocation = camper.location.toLowerCase().includes(location);
      const matchesEquipment = activeFilters.every(
        key => camper[key] === true || 'automatic'
      );
      const matchesVehicleType = vehicleType ? camper.form === vehicleType : true;
  
      return matchesLocation && matchesEquipment && matchesVehicleType;
    });
  }