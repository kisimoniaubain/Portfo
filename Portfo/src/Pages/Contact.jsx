import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_0n7u9ra";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_o47h07g";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "w9H1Onw0PA9CSEtYf";

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback("");

    // avatar url
    const avatar = `https://ui-avatars.com/api/?name=${form.current.user_name.value}&background=random`;

    // put avatar inside hidden input
    form.current.avatar.value = avatar;

    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
    .then(() => {
      setFeedbackType("success");
      setFeedback("Message sent successfully. Thank you for reaching out.");
      e.target.reset();
    })
    .catch((error) => {
      setFeedbackType("error");
      setFeedback("Message failed to send. Please try again in a moment.");
      console.log(error);
    })
    .finally(() => {
      setIsSending(false);
    });
  };
  return (
    <>
    <div className="allcont">
      <div className="contcolum">
        <div className="contcolum1">
          <h2>Let Communicate</h2>
          <div className="icontext1">
           <p><i className="fa-solid fa-phone"></i></p>
           <p>+254 798 406 723</p>
          </div>
          <div className="icontext1">
           <p><i className="fa-solid fa-envelope"></i></p>
           <p>kisimoniaubain@gmail.com</p>
          </div>
          <div className="icontext1">
           <h4><i className="fa-solid fa-location-dot"></i></h4>
           <p>Kenya/Turkana County. <br />Kakuma Refugee Camp</p>
          </div>
        </div>
        <div className="contcolum2">
          <form ref={form} onSubmit={sendEmail}>
             <input type="text" name="user_name" placeholder="Name" required />
             <input type="email" name="user_email" placeholder="Email" required />
             <textarea name="message" placeholder="Message" required />

             {/* hidden avatar input */}
             <input type="hidden" name="avatar" />

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>

            {feedback && (
              <p className={`form-feedback ${feedbackType}`} role="status" aria-live="polite">
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Turkana/Kakuma&output=embed"
        width="100%"
        height="200"
        resize= "vertical"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    </>
  );
};

export default Contact;