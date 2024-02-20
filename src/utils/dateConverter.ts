import dayjs from "dayjs";

const UtcStringToYearMonth = ({ utcString }: { utcString: string }) => {
  const birthdate = dayjs(utcString);
  const currentUtcTime = dayjs();

  const years = currentUtcTime.diff(birthdate, "year");
  const months = currentUtcTime.diff(birthdate, "month") % 12;
  const days = currentUtcTime.diff(birthdate, "day") % 30;

  return { years, months, days };
};

const UtcStringToYear = ({ utcString }: { utcString: string }) => {
  const { years } = UtcStringToYearMonth({ utcString });
  return years;
};

export { UtcStringToYear, UtcStringToYearMonth };
