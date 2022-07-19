import React, { useState, useRef, ReactNode } from "react";
import { ChevronDown } from "../../assets/svgs";
import { Typography } from "@mui/material";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {
  DropDownContainer,
  DropDownHeader,
  //   PlaceText,
  //   DropDownList,
  DropDownListContainer,
  //   ListItem,
} from "./styles";

interface SelectOption {
  label: string;
  icon?: ReactNode;
}

interface SelectProps {
  placeholder: string;
  options: SelectOption[];
  onSelect: (val: string) => void;
}

const SelectField = ({ placeholder, options, onSelect }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: SelectOption) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.label);
  };

  return (
    <DropDownContainer ref={ref}>
      <DropDownHeader onClick={toggling}>
        {selectedOption ? (
          selectedOption.label
        ) : (
          <Typography>{placeholder}</Typography>
        )}
        <ChevronDown size={25} />
      </DropDownHeader>
      {/* {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option.label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )} */}
    </DropDownContainer>
  );
};

export default SelectField;
