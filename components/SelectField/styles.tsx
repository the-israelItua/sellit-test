import { styled } from "@mui/material/styles";

const DropDownContainer = styled("div")(() => ({
  marginBottom: "2rem",
  position: "relative",
}));

const DropDownHeader = styled("div")(() => ({
  borderRadius: "0.75rem",
  outline: "none",
  border: "1px solid grey",
  fontSize: "1em",
  height: "2.5rem",
  padding: "0.5rem 1rem",
  letterSpacing: "0.1rem",
  position: "relative",
  "& :focus": {
    border: "1px solid black",
  },

  "& svg": {
    position: "absolute",
    right: "1rem",
    top: "0.5rem",
  },
}));

const DropDownListContainer = styled("div")(() => ({}));

// const DropDownList = styled.ul`
//   position: absolute;
//   z-index: 10;
//   width: 100%;
//   margin: 0;
//   padding: 1rem;
//   background: #ffffff;
//   border: 2px solid #e5e5e5;
//   box-sizing: border-box;
//   color: #3faffa;
//   font-size: 1em;
//   font-weight: 500;
//   color: ${({ theme }) => theme.colors.grey200};

//   &:first-child {
//     padding-top: 0.8em;
//   }
// `;

// const ListItem = styled.li`
//   list-style: none;
//   padding: 1rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
//   cursor: pointer;
//   &:hover {
//     background: ${({ theme }) => theme.colors.grey300};
//   }
// `;

export {
  DropDownContainer,
  DropDownHeader,
  //   DropDownList,
  DropDownListContainer,
  //   ListItem,
};
