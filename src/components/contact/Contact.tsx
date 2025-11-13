import "./contact.css";

import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) return;
    emailjs
      .sendForm("service_cb85r8q", "template_uxhombi", formRef.current, {
        publicKey: "ZhjpIv5vuzI16M4jH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );

    console.log("email sent!");
  }

  return (
    <div className="c">
      <div className="c-bg"></div>

      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">let's discuss the project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +639204123
            </div>
          </div>

          <div className="c-info">
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              connect@stenix.dev
            </div>
          </div>

          <div className="c-info">
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              BL32 Lot 2, green meadows mintal
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>

          {done && <p>Thank you for submitting will get back on you shortly</p>}
        </div>
      </div>
    </div>
  );
}
export default Contact;
