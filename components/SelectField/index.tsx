import React, { ReactNode, useState, MouseEvent } from "react";
import Fade from "@mui/material/Fade";
import { ChevronDown } from "../../assets/svgs";
import { Select, DropDown, DropDownItem } from "./styles";
import { Typography } from "@mui/material";

interface SelectItem {
  label: string;
  icon?: ReactNode;
}

interface SelectProps {
  defaultValue: string;
  defaultIcon: ReactNode;
  options: SelectItem[];
  onSelect: () => void;
}

const SelectField = ({
  defaultValue,
  defaultIcon,
  options,
  onSelect,
}: SelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = () => {
    setAnchorEl(null);
    onSelect();
  };

  return (
    <div>
      <Select onClick={handleClick} className="select__field">
        {defaultIcon} <Typography variant="body1">{defaultValue}</Typography>
        <ChevronDown className="chevron" />
      </Select>
      <DropDown
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {options.map((item) => (
          <DropDownItem
            onClick={handleSelect}
            sx={{ width: "14.625rem" }}
            key={item.label}
          >
            {item.icon} <Typography variant="body1">{item.label}</Typography>
          </DropDownItem>
        ))}
      </DropDown>
    </div>
  );
};

export default SelectField;
