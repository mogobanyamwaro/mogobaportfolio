import React from 'react';
import './Testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Gloria Too',
      title: 'Biomedical Engineer',
      img: 'https://images.pexels.com/photos/1139244/pexels-photo-1139244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      icon: 'assets/twitter.png',
      desc: 'We thank Mogoba for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.',
    },
    {
      id: 2,
      name: 'Hanold Ochieng',
      title: 'Electrical Engineer',
      img: 'https://images.pexels.com/photos/2380263/pexels-photo-2380263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      icon: 'assets/youtube.png',
      desc: "We've been trying to put together a functional website since I began my practice in April of 2021. I am happy to say we finally hired the Mogoba team and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service! ",
      featured: true,
    },
    {
      id: 3,
      name: 'Janes Ayoga',
      title: 'Electrical Engineer',
      img: 'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      icon: 'assets/linkedin.png',
      desc: 'I am really impressed by the quality of services I received from Douglas Mogoba. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products.',
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
