import React, { useEffect, useState } from 'react';
import './Portifolio.scss';
import { featuredPortfolio, fullstack, shopifyapplication } from '../../data';
import PortifolioList from '../portifolioList/PortifolioList';
function Portifolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },

    {
      id: 'Fullstack',
      title: 'Fullstack',
    },
    {
      id: 'Shopify',
      title: 'Shopify',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'Fullstack':
        setData(fullstack);
        break;

      case 'Shopify':
        setData(shopifyapplication);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Projects</h1>
      <ul>
        {list.map((item) => (
          <PortifolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>
              {d.title}
              <hr />

              {d.pass && d.pass}
            </h3>

            <a className="app__link" target="_blank" href={`${d.link}`}>
              See The App
            </a>
          </div>
        ))}
      </div>
      <a href="#skills">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
}

export default Portifolio;
