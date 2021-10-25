import React from 'react';
import './Testimonials.scss';

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h2>Here is my CV</h2>
      <div className="container">
        <iframe
          src="https://drive.google.com/file/d/1Bnt4w24zl5h1Cc5kehcaL1j91SX9cwqv/preview"
          width="680"
          height="480"
          allow="autoplay"
          title="my Cv"
        ></iframe>
      </div>
    </div>
  );
}
