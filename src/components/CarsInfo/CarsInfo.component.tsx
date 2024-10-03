import { CarsInfoContainer } from "./CarsInfo.styles";

interface Props {
  type: string;
  fuelType: string;
  seats: number;
  transmission: string;
  features: string[];
}

const CarsInfo = ({ type, fuelType, seats, transmission, features }: Props) => {
  return (
    <CarsInfoContainer>
      <p>
        <span>Type:</span> {type}
      </p>
      <p>
        <span>Fuel:</span> {fuelType}
      </p>
      <p>
        <span>Seats:</span> {seats}
      </p>
      <p>
        <span>Transmission:</span> {transmission}
      </p>
      <ul>
        <span>Features:</span>
        {features.map((feature, index) => (
          <li key={index}>{feature + ", "}</li>
        ))}
      </ul>
    </CarsInfoContainer>
  );
};
export default CarsInfo;
