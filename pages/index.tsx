import { useState } from "react";
import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import { getProducts } from "../features/products";
import { getUser } from "../features/user";
import { Product } from "../interfaces/product";
import { wrapper } from "../app/store";
import { BagIcon } from "../assets/svgs";
import Filters from "../components/Filters";
import TopBar from "../components/TopBar";
import ProductCard from "../components/ProductCard";
import ProductLoading from "../components/Skeletons/ProductLoading";
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
  const [currPage, setCurrPage] = useState(1);

  const dispatch = useAppDispatch();
  const { data, pending } = useAppSelector((state) => state.products);

  const handleFetch = (page: number) => {
    let filter =
      page < currPage ? { previous: data.previous } : { next: data.next };

    dispatch(getProducts(filter));
    setCurrPage(page);
  };

  return (
    <>
      <TopBar />
      <Filters />

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
        {pending ? (
          <Grid container spacing={2}>
            {Array(6)
              .fill(1)
              .map((item: Product) => (
                <Grid item xs={6} sm={4} lg={3} key={item.id}>
                  <ProductLoading />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {data?.rows?.map((item: Product) => (
              <Grid item xs={6} sm={4} lg={3} key={item.id}>
                <ProductCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}

        <Pagination
          count={Math.round(data.count / 4)}
          variant="outlined"
          shape="rounded"
          sx={{ mt: "4rem" }}
          onChange={(e, page) => handleFetch(page)}
          hidePrevButton={currPage === 1}
          hideNextButton={currPage === Math.round(data.count / 4)}
        />
      </ProductsWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getUser());
      await dispatch(getProducts({}));
      return { props: { data: "" } };
    }
);

export default Home;
