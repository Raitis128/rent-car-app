import { Links } from "./NavigationLinks.styles";

interface Props {
  className: string;
}

const NavigationLinks = ({ className }: Props) => {
  const links = ["Search", "Cars", "FAQ", "Contact"];

  return (
    <Links className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </Links>
  );
};

export default NavigationLinks;
