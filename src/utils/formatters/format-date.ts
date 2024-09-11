export function formatToDate(value: string | undefined) {
  if (value) {
    try {
      const date = value.split("-");
      let day = date[2].padStart(2, "0");
      let month = date[1].padStart(2, "0");
      let year = date[0].padStart(2, "0");
      return `${day}/${month}/${year}`;
    } catch (err) {
      return "Valor inválido";
    }
  } else {
    return "";
  }
}
