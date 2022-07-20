import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductLoading = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={210} height={210} />
      <Skeleton variant="text" width={210} />
    </Stack>
  );
};

export default ProductLoading;
