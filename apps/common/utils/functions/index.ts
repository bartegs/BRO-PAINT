export function insertToArrayAt<T>(
  array: T[],
  insertAtIndex: number,
  toInsert: T
) {
  array.splice(insertAtIndex, 0, toInsert);
}
