import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

type OptionType = {
  label: string;
  value: string;
};

interface DropdownInputInfoProps {
  text: string;
  icon: string;
  value: string;
  setValue: (newOption: OptionType | null) => void;
  option: OptionType[];
  enableEdit: boolean;
  createable?: boolean;
}

const DropdownInputInfo = (props: DropdownInputInfoProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<OptionType | null>(null);

  const handleOnChangeOption = (newVal: OptionType | null) => {
    setCurrentOption(newVal);
    props.setValue(newVal);
  };

  useEffect(
    () =>
      setCurrentOption(
        props.option.find(
          (option) => option.value === props.value
        ) as OptionType
      ),
    [props.value]
  );

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex flex-row items-center">
        <Icon icon={props.icon} className="h-5 w-5 text-primary" />
        <span className="ml-1 text-primary">{props.text}</span>
      </div>

      <div className="col-span-3">
        {props.enableEdit ? (
          <div className={`w-full font-semibold`}>
            {props.createable ? (
              <CreatableSelect
                options={props.option}
                unstyled
                classNames={{
                  control: (state) =>
                    `border rounded-lg px-2 ${
                      state.isFocused
                        ? "border-2 border-black"
                        : "border-accent-gray-variant"
                    }`,
                  menu: () =>
                    "mt-1 py-1 border border-accent-gray-variant rounded-lg bg-white overflow-hidden",
                  option: (state) =>
                    `px-2 py-2 ${
                      state.isSelected
                        ? "bg-primary text-white"
                        : state.isFocused
                          ? "bg-primary-variant-2"
                          : "bg-white"
                    }`,
                  dropdownIndicator: () => `${isMenuOpen ? "rotate-180" : ""}`,
                }}
                onChange={handleOnChangeOption}
                components={{ IndicatorSeparator: () => null }}
                placeholder="ตัวเลือก..."
                maxMenuHeight={200}
                onMenuOpen={() => setIsMenuOpen(true)}
                onMenuClose={() => setIsMenuOpen(false)}
                formatCreateLabel={(inputValue) =>
                  `สร้างตัวเลือกใหม่ "${inputValue}"`
                }
              />
            ) : (
              <Select
                options={props.option}
                unstyled
                classNames={{
                  control: (state) =>
                    `border rounded-lg px-2 ${
                      state.isFocused
                        ? "border-2 border-black"
                        : "border-accent-gray-variant"
                    }`,
                  menu: () =>
                    "mt-1 py-1 border border-accent-gray-variant rounded-lg bg-white overflow-hidden",
                  option: (state) =>
                    `px-2 py-2 ${
                      state.isSelected
                        ? "bg-primary text-white"
                        : state.isFocused
                          ? "bg-primary-variant-2"
                          : "bg-white"
                    }`,
                  dropdownIndicator: () => `${isMenuOpen ? "rotate-180" : ""}`,
                }}
                onChange={handleOnChangeOption}
                components={{ IndicatorSeparator: () => null }}
                placeholder="ตัวเลือก..."
                maxMenuHeight={200}
                onMenuOpen={() => setIsMenuOpen(true)}
                onMenuClose={() => setIsMenuOpen(false)}
              />
            )}
          </div>
        ) : (
          <div className={`ml-2 font-semibold`}>
            {currentOption ? currentOption.label : "-"}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownInputInfo;

export type { OptionType };
