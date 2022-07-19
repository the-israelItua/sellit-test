import React, { useEffect } from "react";
import type { NextPage } from "next";
import { Grid, Box, Typography, styled } from "@mui/material";
import { getProducts } from "../features/products";
import { getUser } from "../features/user";
import { wrapper } from "../app/store";
import { BagIcon } from "../assets/svgs";
import TopBar from "../components/TopBar";
import SelectField from "../components/SelectField";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const ProductsWrapper = styled("div")(({ theme }) => ({
  padding: "1.5rem",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingBottom: "1rem",
  marginLeft: "1.5rem",
  borderBottom: "1px solid #E7EEFD",
  [theme.breakpoints.down("xs")]: {
    marginLeft: "0rem",
  },
}));

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector((state) => state.products);

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

      <Header>
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
      </Header>
      <ProductsWrapper>
        <Grid container spacing={2}>
          {data?.rows?.map((item) => (
            <Grid item xs={6} sm={4} lg={3}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </ProductsWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getUser());
      await dispatch(getProducts());
    }
);

export default Home;
