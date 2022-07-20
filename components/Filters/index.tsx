import Box from "@mui/material/Box";
import { useAppDispatch } from "../../app/hooks";
import { getProducts } from "../../features/products";
import { SearchWrapper } from "./styles";
import SelectField from "../SelectField";
import SearchBar from "../SearchBar";

const Filters = () => {
  const dispatch = useAppDispatch();

  const searchProduct = (title: string) => {
    dispatch(getProducts({ query: title }));
  };

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        px: { xs: "0", lg: "1.5rem" },
      }}
    >
      {/* <SelectField
        placeholder="Categories"
        options={[{ label: "Shirt" }]}
        onSelect={(val) => console.log(val)}
      /> */}

      <SearchWrapper>
        <SearchBar
          placeholder="Search Product By Title"
          onSubmit={(val) => searchProduct(val)}
        />
      </SearchWrapper>
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
      {/* <SelectField
        placeholder="Categories"
        options={[{ label: "Shirt" }]}
        onSelect={(val) => console.log(val)}
      /> */}
    </Box>
  );
};

export default Filters;
