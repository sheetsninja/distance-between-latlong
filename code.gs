// takes two sets of latitude and longitude coordinates and returns the distance between them in miles.
function getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2) {
  const earthRadiusInMiles = 3958.8; // Radius of the earth in miles

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  }

  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInMiles = earthRadiusInMiles * c; // Distance in miles

  return distanceInMiles;
}
