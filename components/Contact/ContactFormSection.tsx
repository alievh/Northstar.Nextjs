import { FC } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Arimo } from "next/font/google";

const arimo = Arimo({ weight: "700", subsets: ["latin"] });

interface ContactFormSectionProps {}

const ContactFormSection: FC<ContactFormSectionProps> = ({}) => {
  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 className={arimo.className}>We would love to hear from you.</h4>
            <p>
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>
            <form method="post">
              <div className="form-top">
                <div className="row w-100">
                  <div className="form-name col-lg-6">
                    <label htmlFor="name">Name</label>
                    <Input name="name" id="name" />
                  </div>
                  <div className="form-email col-lg-6">
                    <label htmlFor="name">Email</label>
                    <Input name="name" id="name" />
                  </div>
                </div>
              </div>
              <div className="row w-100">
                <div className="form-message col-lg-12">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={12}></textarea>
                </div>
              </div>
              <div className="form-button">
                <Button className="">Send Message</Button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="visit-us">
              <h5 className={arimo.className}>Visit Us</h5>
              <ul>
                <li>UET Lahore, Punjab, Pakistan</li>
                <li>Phone: +923039898987</li>
              </ul>
            </div>
            <div className="get-in-touch">
              <h5 className={arimo.className}>Get In Touch</h5>
              <ul>
                <li>You can get in touch with us on this provided email.</li>
                <li>Email: hmjawad087@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
