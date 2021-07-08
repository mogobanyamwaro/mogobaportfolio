import React from 'react';

import './Footer.scss';

import Button from './Button';
function Footer() {
  return (
    <div>
      <div className="footer ">
        <div className="main-content">
          <div className="left box">
            <h2>About us</h2>
            <div className="content">
              <p>
                You can follow me on WhatsApp also using this number
                +254725523820, I make the most beautiful website at a negotiable
                Price. Also i Make the E-commerce webistes
              </p>
              <div className="social">
                <a href="#">
                  <span className="fab fa-facebook"></span>
                </a>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>

                <a href="#">
                  <span className="fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <div className="fas fa-map-market-alt"></div>
                <span className="text">Nairobi,Kenya</span>
              </div>
              <div className="phone">
                <div className="fas fa-phone-alt"></div>
                <span className="text">0725523820</span>
              </div>
              <div className="email">
                <div className="fas fa-envelope"></div>
                <span className="text">douglasmogoba@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter Your Emaill"
                  />
                </div>
                <div className="msg">
                  <label htmlFor="msg" className="text">
                    Message
                  </label>
                  <textarea name="msg" id="" cols="30" rows="5"></textarea>
                </div>
                <Button text={'Send'} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      {/* <Copyright /> */}
    </div>
  );
}

export default Footer;
