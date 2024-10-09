import React, { useState, useEffect, useRef } from 'react';

export type Option = {
  label: string;
  value: string;
};

interface CustomDropdownProps {
  options: Option[];
  selectedOption: Option | null;
  onOptionSelect: (option: Option) => void; // eslint-disable-line no-unused-vars
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Button */}
      <div
        className="w-full px-4 py-2 font-medium rounded-lg bg-soft-white border border-gray-300 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : 'Select an option'}
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
