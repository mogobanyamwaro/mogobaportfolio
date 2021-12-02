import React from 'react';
import './Testimonials.scss';

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h2 className="testimonial__title">Here is my CV</h2>
      <div className="container">
        <iframe
          src="https://docs.google.com/document/d/1nZx-IJyKTXArvEoLrzVwr0k2mJxregWc4GLu_zPCbQA/edit?usp=sharing"
          width="680"
          height="480"
          allow="autoplay"
          title="my Cv"
        ></iframe>
      </div>
    </div>
  );
}
