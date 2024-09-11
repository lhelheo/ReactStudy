export function formatToBRL(value: number | undefined) {
  let response = "";
  if (value) {
    response = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    value = 0;
    response = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  return response;
}
