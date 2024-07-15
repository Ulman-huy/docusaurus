import useOutsideClick from "@site/src/hooks/useOutsideClick";
import { useState } from "react";

type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?: () => void;
  className?: string;
};

const Select: React.FC<SelectProps> = ({
  options,
  value: initValue,
  onChange,
  className,
}) => {
  const [value, setValue] = useState(initValue ?? "");
  const { ref, click, setClick } = useOutsideClick();

  const onSelect = (item: { value: string; label: string }) => {
    if (onChange) {
      onChange();
    }
    setValue(item.label);
    setClick(false);
  };

  return (
    <div ref={ref} className={`select__container ${className}`}>
      <span>{value}</span>
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
      </svg>
      {click && (
        <div className="select__list">
          {options.map((item, index) => (
            <div
              key={index}
              className="select__item"
              onClick={() => onSelect(item)}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
