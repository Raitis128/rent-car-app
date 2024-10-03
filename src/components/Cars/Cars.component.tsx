import CarsInfo from "../CarsInfo/CarsInfo.component";
import CarSelect from "../CarSelect/CarSelect.component";
import { CarsContainer } from "./Cars.styles";
import { cars } from "../../cars";
import { useState } from "react";

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0].img);
  const [type, setType] = useState(cars[0].type);
  const [features, setFeatures] = useState(cars[0].features);
  const [transmission, setTransmission] = useState(cars[0].transmission);
  const [fuelType, setFuelType] = useState(cars[0].fuelType);
  const [seats, setSeats] = useState(cars[0].seats);

  return (
    <CarsContainer>
      <CarSelect
        onChange={(value) =>
          cars.map((car) => {
            if (car.name === value) {
              setSelectedCar(car.img);
              setType(car.type);
              setFeatures(car.features);
              setTransmission(car.transmission);
              setFuelType(car.fuelType);
              setSeats(car.seats);
            } else return null;
          })
        }
      />
      <div>
        <img src={selectedCar} alt="Taigo" />
      </div>
      <CarsInfo
        type={type}
        fuelType={fuelType}
        seats={seats}
        transmission={transmission}
        features={features}
      />
    </CarsContainer>
  );
};

export default Cars;
