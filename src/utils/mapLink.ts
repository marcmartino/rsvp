export const mapsLink = (url: string) => {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") !== -1 ||
    navigator.platform.indexOf("iPad") !== -1 ||
    navigator.platform.indexOf("iPod") !== -1
  )
    return `maps://${url}`;
  // window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
  /* else use Google */ else return `https://${url}`;
  // window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
};
