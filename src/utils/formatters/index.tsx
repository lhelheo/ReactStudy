import { formatToBRL } from "./format-cash";
import { formatToDate } from "./format-date";
import { formatToDatetime } from "./format-datetime";
import { formatToDocument } from "./format-document";
import { formatToPercentage } from "./format-pct";
import { formatToPhone } from "./format-phone";

export const formatters = {
  phone: formatToPhone,
  date: formatToDate,
  datetime: formatToDatetime,
  cash_brl: formatToBRL,
  percentage: formatToPercentage,
  document: formatToDocument,
};

export type FormatterTypes = keyof typeof formatters;
