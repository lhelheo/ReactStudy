export const formatToDatetime = (value: string | undefined) => {
  if (value) {
    try {
      let splited = value.split("T");
      const time = splited[1].split(".")[0];
      const date = splited[0].split("-");
      let day = date[2].padStart(2, "0");
      let month = date[1].padStart(2, "0");
      let year = date[0].padStart(2, "0");
      return `${day}/${month}/${year} - ${time}`;
    } catch (err) {
      return "Valor inválido";
    }
  } else {
    return "";
  }
};
