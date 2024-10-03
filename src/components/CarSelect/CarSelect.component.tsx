import { cars } from "../../cars";
import { CarsSelectContainer } from "./CarSelect.styles";

interface Props {
  onChange: (car: string) => void;
}

const CarSelect = ({ onChange }: Props) => {
  return (
    <CarsSelectContainer>
      <h2>Choose your car</h2>
      <select onChange={(event) => onChange(event.target.value)}>
        {cars.map((car, index) => (
          <option key={index}>{car.name}</option>
        ))}
      </select>
    </CarsSelectContainer>
  );
};
export default CarSelect;
