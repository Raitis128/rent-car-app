import { QuestionSection } from "./Question.styles";
import { useState } from "react";

import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <QuestionSection onClick={handleClick}>
      <section>
        <h3>{question}</h3>
        {isOpen ? (
          <FaAngleUp className="up" />
        ) : (
          <FaAngleDown className="down" />
        )}
      </section>
      {isOpen && <p>{answer}</p>}
    </QuestionSection>
  );
};

export default Question;
