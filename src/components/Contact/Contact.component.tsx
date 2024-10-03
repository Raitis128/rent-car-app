import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { ContactSection } from "./Contact.styles";
import ContactCard from "../ContactCard/ContactCard.component";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Get in touch</h2>
      <p>
        Want to get in touch? We'd love to hear from you! Here is how you can
        reach us...
      </p>
      <section>
        <ContactCard
          icon={FaPhone}
          title="Talk to us"
          description="Give us a call for immediate assistance"
          contact="+371 123 456 78"
          contactType="phone"
        />
        <ContactCard
          icon={MdEmail}
          title="Email us"
          description="Send us an email and we’ll get back to you shortly"
          contact="simplecar@gmail.com"
          contactType="email"
        />
      </section>
    </ContactSection>
  );
};

export default Contact;
