import Question from "../Question/Question.component";
import { FAQuestion } from "./Faq.styles";

const Faq = () => {
  const questions = [
    {
      question: "What type of car is ideal for driving in Riga?",
      answer:
        "For driving around Riga, a mid-sized sedan is practical. An economy car can help save on fuel costs, while an SUV provides more space, especially for road trips across Latvia. During the winter, a four-wheel drive vehicle is recommended for better handling in snow and icy conditions, and it's important to have winter tires.",
    },
    {
      question: "What is the speed limit in Riga?",
      answer:
        "In urban areas, the speed limit is generally 50 kilometers per hour (31 miles per hour), unless signs indicate otherwise. On main roads, the speed limit is usually 90 km/h (55 mph), while on high-speed roads, drivers can go up to 100 km/h (62 mph).",
    },
    {
      question: "Where are the best parking spots in Riga?",
      answer:
        "Paid on-street parking in Riga is enforced from 8 a.m. to 8 p.m. on weekdays, and from 9 a.m. to 5 p.m. on Saturdays. Parking is free on Sundays and public holidays. Different zones have different rates, and Old Riga has parking lots where prices range from €1.50 from 8 a.m. to 5 p.m., and €1 until 11 p.m.",
    },
    {
      question: "How much does it cost to rent a Compact car in Riga?",
      answer:
        "The average daily cost to rent a Compact car in Riga is about $68.",
    },
    {
      question:
        "What is the average price to rent an Intermediate car in Riga?",
      answer:
        "The average daily rate for an Intermediate car rental in Riga is around $61.",
    },
    {
      question: "What is the cost of renting a car for a week in Riga?",
      answer:
        "On average, renting a car in Riga for a week costs about $156, or around $22 per day.",
    },
    {
      question: "What is the cost of renting a car for a month in Riga?",
      answer:
        "The average monthly car rental cost in Riga is around $668, which breaks down to about $22 per day.",
    },
  ];

  return (
    <FAQuestion>
      <h2>FAQs about renting a car in Riga</h2>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </FAQuestion>
  );
};

export default Faq;
