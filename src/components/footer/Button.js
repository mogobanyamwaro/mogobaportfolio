import React from 'react';
import './Button.scss';
function Button({ text, addToCart, id }) {
  return (
    <div>
      <button className="btn btn--primary" onClick={() => addToCart(id, 1)}>
        {text}
      </button>
    </div>
  );
}

export default Button;
