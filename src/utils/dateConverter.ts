import dayjs from "dayjs";

const UtcStringToYearMonth = ({ utcString }: { utcString: string }) => {
  const birthdate = dayjs(utcString);
  const currentUtcTime = dayjs();

  const yearsDifference = currentUtcTime.diff(birthdate, "year");
  const remainingMonths = currentUtcTime.diff(birthdate, "month") % 12;

  const years = yearsDifference;
  const months = remainingMonths;

  return { years, months };
};

const UtcStringToYear = ({ utcString }: { utcString: string }) => {
  const { years } = UtcStringToYearMonth({ utcString });
  return years;
};

export { UtcStringToYear, UtcStringToYearMonth };
