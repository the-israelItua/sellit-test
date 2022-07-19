import React from "react";
import type { NextPage } from "next";
import { Grid, Box, Typography, styled } from "@mui/material";
import { BagIcon } from "../assets/svgs";
import TopBar from "../components/TopBar";
import SelectField from "../components/SelectField";
import ProductCard from "../components/ProductCard";

const ProductsWrapper = styled("div")(({ theme }) => ({
  padding: "1.5rem",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));

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
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pb: "1rem",
            mb: "1rem",
            borderBottom: "1px solid #E7EEFD",
            margin: "0 1rem",
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
        <ProductsWrapper>
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
        </ProductsWrapper>
      </div>
    </>
  );
};

export default Home;
