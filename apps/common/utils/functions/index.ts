export function insertToArrayAt<T>(
  array: T[],
  insertAtIndex: number,
  elementsToInsert: T
) {
  array.splice(insertAtIndex, 0, elementsToInsert);
}
