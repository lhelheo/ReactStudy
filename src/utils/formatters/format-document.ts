export function formatToDocument(document: string | undefined): string {
  if (document) {
    if (document.length === 11) {
      return handleFormatToCPF(document);
    } else if (document.length === 14) {
      return handleFormatToCNPJ(document);
    } else if (document.length === 9) {
      return handleFormatToRG(document);
    } else {
      return document;
    }
  } else {
    return "";
  }
}

export function handleFormatToCPF(cpf: string): string {
  const digitsOnly = cpf.replace(/\D/g, "");
  let handleFormattedCPF = "";
  handleFormattedCPF = digitsOnly.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4",
  );

  return handleFormattedCPF;
}

export function handleFormatToRG(rg: string): string {
  const digitsOnly = rg.replace(/\D/g, "");

  const handleFormattedRG = digitsOnly.replace(
    /(\d{2})(\d{3})(\d{3})(\d{1})/,
    "$1.$2.$3-$4",
  );

  return handleFormattedRG;
}

export function handleFormatToCNPJ(cnpj: string): string {
  const digitsOnly = cnpj.replace(/\D/g, "");

  const handleFormattedCNPJ = digitsOnly.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5",
  );

  return handleFormattedCNPJ;
}
