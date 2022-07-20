import React, { useState } from "react";
import { Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { Setting, ChevronDown } from "../../assets/svgs";
import DrawerBody from "./DrawerBody";
import { FilterWrapper } from "./styles";

const Filter = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <>
      <FilterWrapper onClick={() => setOpen(true)}>
        <Setting />
        <Typography variant="body1">Filter</Typography>
        <ChevronDown />
      </FilterWrapper>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        variant="temporary"
        sx={{ borderRadius: "1rem" }}
      >
        <DrawerBody />
      </Drawer>
    </>
  );
};

export default Filter;
