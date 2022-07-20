import Box from "@mui/material/Box";
import {
  CategoriesIcon,
  View,
  Sort,
  List,
  Featured,
  Newest,
  Oldest,
  PriceDown,
  PriceUp,
} from "../../assets/svgs";
import { useAppDispatch } from "../../app/hooks";
import { getProducts } from "../../features/products";
import {
  Container,
  SearchWrapper,
  RightContainer,
  LeftContainer,
} from "./styles";
import SelectField from "../SelectField";
import SearchBar from "../SearchBar";
import Filter from "../Filter";

const FilterControls = () => {
  const dispatch = useAppDispatch();

  const searchProduct = (title: string) => {
    dispatch(getProducts({ query: title }));
  };

  return (
    <Container>
      <LeftContainer>
        <SelectField
          defaultValue="Categories"
          defaultIcon={<CategoriesIcon />}
          options={[
            { label: "All Products (965)" },
            { label: "Shirts" },
            { label: "Pants" },
            { label: "Suits" },
            { label: "Hats" },
            { label: "Summer Essentials" },
            { label: "Shoes & Sandals" },
          ]}
          onSelect={() => dispatch(getProducts({}))}
        />

        <SearchWrapper>
          <SearchBar
            placeholder="Search Product By Title"
            onSubmit={(val) => searchProduct(val)}
          />
        </SearchWrapper>
      </LeftContainer>

      <RightContainer>
        <Filter />
        <SelectField
          defaultValue="View"
          defaultIcon={<View />}
          options={[
            { label: "Grid", icon: <View /> },
            { label: "List", icon: <List /> },
          ]}
          onSelect={() => {}}
        />
        <SelectField
          defaultValue="Sort"
          defaultIcon={<Sort />}
          options={[
            { label: "Featured", icon: <Featured /> },
            { label: "Newest", icon: <Newest /> },
            { label: "Oldest", icon: <Oldest /> },
            { label: "Price: High - Low", icon: <PriceDown /> },
            { label: "Price: Low - High", icon: <PriceUp /> },
          ]}
          onSelect={() => {}}
        />
      </RightContainer>
    </Container>
  );
};

export default FilterControls;
