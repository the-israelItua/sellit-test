import { styled } from "@mui/material/styles";

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

export { Select };
