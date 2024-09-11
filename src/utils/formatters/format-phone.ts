export function formatToPhone(phone: string | undefined): string {
  if (!phone) return "";

  let cleanedNumber = phone.replace(/\D/g, "");

  if (cleanedNumber.startsWith("55")) {
    const result = cleanedNumber.replace(
      /^(\d{2})(\d{2})(\d{5})(\d{4})$/,
      "+$1 ($2) $3-$4",
    );
    return result;
  } else if (phone.length === 9) {
    const result = cleanedNumber.replace(
      /^(\d{2})(\d{4})(\d{4})$/,
      "+55 ($1) $2-$3",
    );
    return result;
  } else if (phone.length === 11) {
    const result = cleanedNumber.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      "+55 ($1) $2-$3",
    );
    return result;
  } else {
    const result = cleanedNumber.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      "+55 (00) $1-$2 (está faltando DDD no telefone!)",
    );
    return result;
  }
}
