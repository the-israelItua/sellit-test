import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Select = styled("button")(() => ({
  border: "1px solid #CCD7E7",
  boxShadow: "0px 4px 6px 0px #F4F6F8",
  borderRadius: "0.75rem",
  height: "2.5rem",
  cursor: "pointer",
  padding: "0.5rem 1rem",
  background: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& div": {
    display: "flex",
    alignItems: "center",
  },
  "& svg": {
    marginRight: "0.5rem",
  },
  "& p": {
    marginRight: "0.5rem",
    fontSize: "1em",
    fontWeight: 600,
    color: "#3C4551",
  },
}));

const DropDown = styled(Menu)(() => ({
  top: "0.25rem",

  "& .MuiMenu-paper": {
    borderRadius: "1rem",
    boxShadow: "0px 3px 24px 4px #DFE3E8",
  },
}));

const DropDownItem = styled(MenuItem)(() => ({
  borderBottom: "1px solid #E7EEFD",
  margin: "0 0.75rem",
  padding: "0",
  height: "2.8rem",
  "&: last-child": {
    borderBottom: 0,
  },
  "& svg": {
    marginRight: "0.5rem",
  },
  "& p": {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#3C4551",
  },
}));

export { Select, DropDown, DropDownItem };
