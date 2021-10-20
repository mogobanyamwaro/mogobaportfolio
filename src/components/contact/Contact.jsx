import React, { useState } from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';
function Contact() {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMessageSuccess(true);
    }, 3000);
    emailjs
      .sendForm(
        'service_r3i8wyb',
        'template_e75qvka',
        e.target,
        'user_mLiohPME8o07IeVlmvRJA'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <input
            type="email"
            required
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            required
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
          {messageSuccess && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
