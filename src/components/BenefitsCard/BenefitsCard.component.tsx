import { IconType } from "react-icons";
import { Card } from "./BenefitsCard.styles";
import React from "react";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

const BenefitsCard = ({ icon, title, description }: Props) => {
  return (
    <Card>
      <span>{React.createElement(icon)}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default BenefitsCard;
