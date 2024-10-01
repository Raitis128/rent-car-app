import { Links } from "./NavigationLinks.styles";

interface Props {
  className: string;
  onClick?: () => void;
}

const NavigationLinks = ({ className, onClick }: Props) => {
  const links = ["Search", "Cars", "FAQ", "Contact"];

  return (
    <Links className={className}>
      {links.map((link, index) => (
        <li key={index} onClick={onClick}>
          <a href="#">{link}</a>
        </li>
      ))}
    </Links>
  );
};

export default NavigationLinks;
