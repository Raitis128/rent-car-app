import { SearchContainer } from "./Rent.styles";
import { cars } from "../../cars";

const Rent = () => {
  return (
    <SearchContainer id="search">
      <section className="text-container">
        <h1>Available cars</h1>
        <form>
          {cars.map((car) => (
            <span key={car.name}>
              <input type="radio" id={car.name} name="car" value={car.name} />
              <label htmlFor={car.name}>
                {car.name}{" "}
                <span>{`(Daily rent price: ${car.dailyRent}$)`}</span>
              </label>
            </span>
          ))}
          <button type="submit">Rent</button>
        </form>
      </section>
    </SearchContainer>
  );
};

export default Rent;
