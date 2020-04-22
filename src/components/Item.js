import React, { useState } from 'react';
import { spiceEmoji } from '../App';

export const Item = ({ item, orderItems, setOrderItems }) => {
  const [inOrder, setInOrder] = useState(false);

  return (
    <div key={item.id} className="item" data-test-id="item">
      <div className="item__info">
        <h3 className="item__heading" data-test-id={`item-heading-${item.id}`}>
          {item.name}
        </h3>
        <span className="item__spice" data-test-id={`spice-${item.id}`}>
          {spiceEmoji(item.spice)}
        </span>
        <p
          className="item__info-description"
          data-test-id={`item-description-${item.id}`}
        >
          {item.desc}
        </p>
        <button
          data-test-id={`add-item-${item.id}`}
          type="button"
          onClick={() => {
            setInOrder(!inOrder);

            if (!inOrder) {
              setOrderItems([...orderItems, item]);
            } else {
              setOrderItems([
                ...orderItems.filter(orderItem => orderItem.id !== item.id),
              ]);
            }
          }}
        >
          {inOrder
            ? `Remove ${item.name} | £${item.price}`
            : `Add ${item.name} | £${item.price}`}
        </button>
      </div>
      <div className="item__media">
        <img
          data-test-id={`image-${item.id}`}
          src={item.image}
          alt={item.name}
        />
      </div>
    </div>
  );
};
