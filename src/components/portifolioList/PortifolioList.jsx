import React from 'react';
import './PortifolioList.scss';
export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => setSelected(id)}
    >
      <p>{title}</p>
    </li>
  );
}
