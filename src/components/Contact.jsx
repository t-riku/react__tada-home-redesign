import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    // console.log(userID);
    // console.log(templateID);
    // console.log(serviceID);

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)

      .then(
        (result) => {
          window.alert("お問い合わせを送信致しました。");
          console.log(result.text);
        },
        (error) => {
          window.alert("お問い合わせの送信に失敗しました。");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="row mb-5">
        <div className="col-md-8 mx-auto text-center">
          <h6>contact</h6>
          <h3>お問い合わせ</h3>
          <p>
            お問い合わせは、以下のフォームから受け付けております。
            <br />
            メール、お電話からのご連絡でも大丈夫です！お気軽にご連絡ください。
          </p>
        </div>
      </div>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sekkei@arttada.com</h5>
            <a href="mailto:sekkei@arttada.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>0466-42-1793</h5>
            <a href="tel:0466-42-1793" target="_blank">
              Telephone
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
