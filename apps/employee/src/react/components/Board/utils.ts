export function sendUpdatedData(
  updatedData: {},
  collection: string,
  id: string
) {
  fetch(`http://localhost:3000/${collection}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...updatedData,
    }),
  })
    .then((response) => response.json())
    .then((test) => console.log(test))
    .catch((error) => console.log(error));
}
