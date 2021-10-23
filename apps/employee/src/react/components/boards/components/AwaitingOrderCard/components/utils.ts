import { token } from "../../../../../../../../common/utils/contants";

export function handleDeletingAwaitingOrders(url: string) {
  // this should be useFetch hook which returns data, and errors

  fetch(url, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
