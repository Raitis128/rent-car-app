import { SearchFormContainer } from "./SearchForm.styles";

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <section className="container">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Riga, Latvia" />
      </section>
      <section className="container">
        <label htmlFor="pickup">Pick-up date</label>
        <section>
          <input type="date" id="pickup" />
          <input type="time" />
        </section>
      </section>
      <section className="container">
        <label htmlFor="return">Pick-up date</label>
        <section>
          <input type="date" id="return" />
          <input type="time" />
        </section>
      </section>
      <button type="submit">Search</button>
    </SearchFormContainer>
  );
};

export default SearchForm;
