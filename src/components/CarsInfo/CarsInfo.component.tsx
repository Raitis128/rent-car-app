import { CarsInfoContainer } from "./CarsInfo.styles";

import { FaCar } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatLegroomNormal } from "react-icons/md";
import { TbManualGearboxFilled } from "react-icons/tb";
import { IoSpeedometer } from "react-icons/io5";

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
        <FaCar className="icon" />
        <span>Type:</span> {type}
      </p>
      <p>
        <BsFillFuelPumpFill className="icon" />
        <span>Fuel:</span> {fuelType}
      </p>
      <p>
        <MdAirlineSeatLegroomNormal className="icon" />
        <span>Seats:</span> {seats}
      </p>
      <p>
        <TbManualGearboxFilled className="icon" />
        <span>Transmission:</span> {transmission}
      </p>
      <ul>
        <IoSpeedometer className="icon" />
        <span>Features:</span>
        {features.map((feature, index) => (
          <li key={index}>{feature + ", "}</li>
        ))}
      </ul>
    </CarsInfoContainer>
  );
};
export default CarsInfo;
