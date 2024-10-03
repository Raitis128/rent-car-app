import BenefitsCard from "../BenefitsCard/BenefitsCard.component";
import { BenefitsSection } from "./Benefits.styles";

import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

const Benefits = () => {
  return (
    <BenefitsSection>
      <h2>Why book with us</h2>
      <section>
        <BenefitsCard
          icon={HiMiniCheckBadge}
          title="Free cancellation"
          description="Book now with no stress"
        />
        <BenefitsCard
          icon={FaWallet}
          title="No hidden charges"
          description="Know exactly what you're paying for before booking"
        />
        <BenefitsCard
          icon={FaRegCreditCard}
          title="Secure online payment"
          description="Feel confident in your booking"
        />
      </section>
    </BenefitsSection>
  );
};

export default Benefits;
