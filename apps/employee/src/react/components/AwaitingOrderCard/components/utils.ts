export function handleDeletingAwaitingOrders(url: string) {
  // this should be useFetch hook which returns data, and errors

  fetch(url, {
    method: "DELETE",
  })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));
}
