import Image from "next/image";
import { Typography } from "@mui/material";
import { Bolt } from "../../assets/svgs";
import { truncate } from "../../utils";
import { Product } from "../../interfaces/product";
import { Wrapper, CardPrice, ImageWrapper } from "./styles";

const ProductCard = ({ item }: { item: Product }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/product.jpeg" alt="" layout="fill" priority />
      </ImageWrapper>
      <Typography
        sx={{
          mt: "0.5rem",
          fontSize: "0.875em",
          fontWeight: 400,
        }}
      >
        {truncate(item.description)}
      </Typography>
      <CardPrice>
        <Bolt />
        <Typography variant="h5">${item.price}</Typography>
        <Typography variant="body1">$145.00</Typography>
      </CardPrice>
    </Wrapper>
  );
};

export default ProductCard;
