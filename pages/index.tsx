import React from "react";
import type { NextPage } from "next";
import { Grid, Box, Typography } from "@mui/material";
import { BagIcon } from "../assets/svgs";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import SelectField from "../components/SelectField";
import ProductCard from "../components/ProductCard";

const Home: NextPage = () => {
  return (
    <>
      <TopBar />

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          px: { xs: "0", lg: "1.5rem" },
        }}
      >
        <SelectField
          placeholder="Categories"
          options={[{ label: "Shirt" }]}
          onSelect={(val) => console.log(val)}
        />
        {/* <SearchBar /> */}
        <SelectField
          placeholder="Categories"
          options={[{ label: "Shirt" }]}
          onSelect={(val) => console.log(val)}
        />
        <SelectField
          placeholder="Categories"
          options={[{ label: "Shirt" }]}
          onSelect={(val) => console.log(val)}
        />
        <SelectField
          placeholder="Categories"
          options={[{ label: "Shirt" }]}
          onSelect={(val) => console.log(val)}
        />
      </Box>
      <Box sx={{ px: { xs: "1rem", sm: 0, lg: "1.5rem" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pb: "1rem",
            mb: "1rem",
            borderBottom: "1px solid #E7EEFD",
          }}
        >
          <BagIcon />
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: 600,
              color: "#3C4551",
              ml: "0.5rem",
            }}
          >
            All Products
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
