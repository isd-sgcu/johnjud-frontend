const UtcStringToYearMonth = ({ utcString }: { utcString: string }) => {
  const birthdate = new Date(utcString);
  const currentUtcTime = new Date();

  const timeDifference = currentUtcTime.getTime() - birthdate.getTime();
  const yearsDifference = Math.floor(
    timeDifference / (365 * 24 * 60 * 60 * 1000)
  );
  const remainingMonths = Math.floor(
    (timeDifference % (365 * 24 * 60 * 60 * 1000)) /
      (24 * 60 * 60 * 1000) /
      (365 / 12)
  );

  const years = yearsDifference;
  const months = remainingMonths;

  return { years, months };
};
export { UtcStringToYearMonth };
