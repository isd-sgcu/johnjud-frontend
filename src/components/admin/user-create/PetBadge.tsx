import { Icon, addIcon } from "@iconify/react";

addIcon("custom:primary:banner", {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="67" height="96" viewBox="0 0 67 96" fill="none">
    <path d="M66.5 91.892C66.5 93.4628 64.7722 94.4205 63.4401 93.588L34.5562 75.5377C33.9077 75.1324 33.0847 75.1324 32.4362 75.5378L3.56008 93.5875C2.22799 94.4201 0.5 93.4624 0.5 91.8915V4.75024C0.5 3.65623 0.934598 2.60702 1.70819 1.83343C2.48177 1.05984 3.53098 0.625244 4.625 0.625244H62.375C63.469 0.625244 64.5182 1.05984 65.2918 1.83343C66.0654 2.60702 66.5 3.65623 66.5 4.75024V91.892Z" fill="#08878E"/>
  </svg>`,
  width: 67,
  height: 96,
});

addIcon("custom:yellow:banner", {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="54" height="79" viewBox="0 0 54 79" fill="none">
    <path d="M54 74.8917C54 76.4625 52.2722 77.4202 50.9401 76.5878L28.0569 62.2874C27.4083 61.8821 26.5854 61.8822 25.9369 62.2876L3.06009 76.5872C1.728 77.4199 0 76.4622 0 74.8913V4.25C0 3.35489 0.35558 2.49645 0.988515 1.86352C1.62145 1.23058 2.47989 0.875 3.375 0.875H50.625C51.5201 0.875 52.3786 1.23058 53.0115 1.86352C53.6444 2.49645 54 3.35489 54 4.25V74.8917Z" fill="#FFFF31"/>
  </svg>`,
  width: 54,
  height: 79,
});

addIcon("custom:chess", {
  body: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.5 11.2502C16.5 12.4437 16.0259 13.5883 15.182 14.4322C14.3381 15.2761 13.1935 15.7502 12 15.7502M12 15.7502C9.50272 14.2519 6.63461 14.4166 4.99702 14.6938C4.58204 14.7646 4.15553 14.7177 3.76588 14.5583C3.37623 14.399 3.03903 14.1336 2.79254 13.7924L1.5 12.0002L11.25 6.00024V3.00024H12C13.1927 3.00025 14.3735 3.23731 15.4737 3.69765C16.574 4.15799 17.5718 4.83242 18.4091 5.68176C19.2464 6.5311 19.9066 7.53839 20.3512 8.6451C20.7959 9.7518 21.0161 10.9358 20.9991 12.1284C20.9319 16.955 17.0083 20.9031 12.1821 20.9984C9.90542 21.0477 7.69522 20.229 5.99996 18.7085M12 15.7502L8.6968 20.3747" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.625 10.5002C12.2463 10.5002 12.75 9.99656 12.75 9.37524C12.75 8.75392 12.2463 8.25024 11.625 8.25024C11.0037 8.25024 10.5 8.75392 10.5 9.37524C10.5 9.99656 11.0037 10.5002 11.625 10.5002Z" fill="white"/>
  </svg>`,
  width: 24,
  height: 24,
});

interface PetBadgeProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const PetBadge = (props: PetBadgeProps) => {
  const handleOnClick = () => {
    props.setValue(props.value === "fromClub" ? "fromOutside" : "fromClub");
  };
  return (
    <div
      className="relative flex w-full cursor-pointer select-none"
      onClick={handleOnClick}
    >
      <Icon
        icon={
          props.value === "fromClub"
            ? "custom:primary:banner"
            : "custom:yellow:banner"
        }
        className="h-24 w-16"
        color={props.value === "fromClub" ? "#08878E" : "#FFFF31"}
      />
      <div
        className={
          "absolute top-[0.4rem] flex w-full flex-col items-center text-sm " +
          (props.value === "fromClub" ? "text-white" : "text-black")
        }
      >
        <Icon
          icon={props.value === "fromClub" ? "custom:chess" : "ph:paw-print"}
          className="h-6 w-6"
        />
        <div className="">สัตว์เลี้ยง</div>
        <div className="flex flex-row items-center">
          {props.value === "fromClub" ? "ชมรม" : "ฝาก"}
          <Icon
            icon="fluent:arrow-swap-20-regular"
            className="h-5 w-5"
            hFlip={true}
            color={props.value === "fromClub" ? "white" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default PetBadge;
