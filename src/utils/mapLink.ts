export const mapsLink = (lat: string, long: string) => {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") !== -1 ||
    navigator.platform.indexOf("iPad") !== -1 ||
    navigator.platform.indexOf("iPod") !== -1
  )
    return `maps://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`;
  /* else use Google */ else
    return `https://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`;
};
