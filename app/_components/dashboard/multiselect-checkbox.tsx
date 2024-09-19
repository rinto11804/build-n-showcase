import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  options: Option[];
  onChange?: (selectedOptions: Option[]) => void;
};

function CheckboxGroup({ options, onChange }: CheckboxGroupProps) {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleCheckboxChange = (option: Option) => {
    const updatedSelection = selectedOptions.some(
      (item) => item.value === option.value
    )
      ? selectedOptions.filter((item) => item.value !== option.value)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
    if (onChange) {
      onChange(updatedSelection);
    }
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-medium">Select Resources</span>
      </label>
      <div className="bg-base-100/60 rounded-box p-4">
        {options.map((option) => (
          <div key={option.value} className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selectedOptions.some(
                  (item) => item.value === option.value
                )}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="label-text">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckboxGroup;
