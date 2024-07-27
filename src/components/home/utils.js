export function getLength(value) {
  if (typeof value === "number") {
    return value.toString().length;
  }

  if (typeof value === "string" && !isNaN(Number(value))) {
    return value.length;
  }

  return -1;
}

export function timeToFormat(time) {
  const digitsCount = getLength(time);

  if (digitsCount === 1) {
    return "0" + time;
  }
  if (digitsCount === 2) {
    return time.toString();
  }
  if (digitsCount === -1) {
    return "00";
  }
}
