import { FieldValues } from "react-hook-form";
import SearchForm from "../SearchForm/SearchForm.component";
import { SearchContainer } from "./Search.styles";

const Search = () => {
  const handleSearchSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <SearchContainer id="search">
      <SearchForm onSubmit={handleSearchSubmit} />
      <section className="text-container">
        <h1>Find Your Perfect Rental Car</h1>
        <p>
          Explore a wide selection of cars for every need and budget. Whether
          you're planning a road trip, need a vehicle for business, or just want
          to explore the city, we've got you covered.
        </p>
      </section>
    </SearchContainer>
  );
};

export default Search;
