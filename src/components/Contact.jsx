import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { contactFormData, contactInfo } from "./data";

function Contact() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      controls.start({ opacity: scrollTop > 500 ? 1 : 0, y: scrollTop > 500 ? 0 : 50 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="font-inter text-[13.33px] font-semibold">{contactFormData.heading}</h3>
        <h2 className="font-poly font-normal text-[40px]">
          {contactFormData.subHeading}
        </h2>
      </motion.div>
      <motion.div
        className="contact-us"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3 className="font-poly text-[20px] font-normal">{contactFormData.formTitle}</h3>
        <form action="#">
          {contactFormData.fields.map((field, index) => (
            <div key={index}>
              <label>
                {field.label}
                {field.required && <em>&#x2a;</em>}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
              />
            </div>
          ))}
          <button id="customerOrder">{contactFormData.buttonText}</button>
        </form>
      </motion.div>
      <motion.div
        className="social"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="location">
          <img src={contactInfo.location.icon} alt="Map Marker Icon" />
          <div className="detail">
            <h3>{contactInfo.location.title}</h3>
            <p>{contactInfo.location.detail}</p>
          </div>
        </div>
        <div className="mail">
          <img src={contactInfo.mail.icon} alt="Mail Envelope Icon" />
          <div className="detail">
            <h3>{contactInfo.mail.title}</h3>
            <p>
              {contactInfo.mail.detail.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
