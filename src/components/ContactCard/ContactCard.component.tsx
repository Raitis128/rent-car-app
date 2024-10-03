import { IconType } from "react-icons";
import React from "react";

import { Card } from "./ContactCard.styles";

interface Props {
  icon: IconType;
  title: string;
  description: string;
  contact: string;
  contactType: string;
}

const ContactCard = ({
  icon,
  title,
  description,
  contact,
  contactType,
}: Props) => {
  return (
    <Card>
      <span>{React.createElement(icon)}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {contactType === "phone" ? (
        <a href={`tel:${contact}`}>{contact}</a>
      ) : (
        <a href={`mailto:${contact}`}>{contact}</a>
      )}
    </Card>
  );
};

export default ContactCard;
