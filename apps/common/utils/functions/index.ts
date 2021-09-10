export function insertToArrayAt<T>(
  array: T[],
  insertAtIndex: number,
  toInsert: T
) {
  array.splice(insertAtIndex, 0, toInsert);
}

export function isGivenLocation(location: string): boolean {
  const { pathname } = window.location;

  return pathname.includes(location);
}
