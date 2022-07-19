import Image from "next/image";
import { Typography } from "@mui/material";
import { Bolt } from "../../assets/svgs";
import { CardPrice, ImageWrapper } from "./styles";

const ProductCard = () => {
  return (
    <div>
      <ImageWrapper>
        <Image src="/product.png" alt="" layout="fill" />
      </ImageWrapper>
      <Typography sx={{ mt: "0.5rem", fontSize: "0.875em", fontWeight: 400 }}>
        Sellit Limited Edition Hoodie...
      </Typography>
      <CardPrice>
        <Bolt />
        <Typography variant="h5">$197</Typography>
        <Typography variant="body1">$145.00</Typography>
      </CardPrice>
    </div>
  );
};

export default ProductCard;
