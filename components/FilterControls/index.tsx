import Box from "@mui/material/Box";
import { useAppDispatch } from "../../app/hooks";
import { getProducts } from "../../features/products";
import { SearchWrapper } from "./styles";
import SelectField from "../SelectField";
import SearchBar from "../SearchBar";
import Filter from "../Filter";
import { CategoriesIcon, View, Sort } from "../../assets/svgs";

const FilterControls = () => {
  const dispatch = useAppDispatch();

  const searchProduct = (title: string) => {
    dispatch(getProducts({ query: title }));
  };

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        ml: { xs: "0", lg: "1.5rem" },
        mb: "2rem",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <SelectField
        defaultValue="Categories"
        defaultIcon={<CategoriesIcon />}
        options={[{ label: "Shirt" }]}
        onSelect={(val) => console.log(val)}
      />

      <SearchWrapper>
        <SearchBar
          placeholder="Search Product By Title"
          onSubmit={(val) => searchProduct(val)}
        />
      </SearchWrapper>

      <Filter />
      <SelectField
        defaultValue="View"
        defaultIcon={<View />}
        options={[{ label: "Shirt" }]}
        onSelect={(val) => console.log(val)}
      />
      <SelectField
        defaultValue="Sort"
        defaultIcon={<Sort />}
        options={[{ label: "Shirt" }]}
        onSelect={(val) => console.log(val)}
      />
    </Box>
  );
};

export default FilterControls;
