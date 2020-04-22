import React from 'react';
import { spiceEmoji } from '../App';

export const Order = ({ orderItems }) => (
  <section className="order" data-test-id="order-summary">
    <h2 className="order__heading" data-test-id="order-heading">
      Order
    </h2>
    {orderItems &&
      orderItems.map(item => (
        <div
          className="order__item"
          key={`order-${item.id}`}
          data-test-id="order-item"
        >
          <div className="order__name" data-test-id={`order-name-${item.id}`}>
            <h3>🌯 {item.name}</h3>
          </div>
          <div className="order__price">
            <h3>
              <span
                className="order__spice"
                data-test-id={`order-spice-${item.id}`}
              >
                {spiceEmoji(item.spice)}
              </span>{' '}
              <span data-test-id={`order-price-${item.id}`}>£{item.price}</span>
            </h3>
          </div>
        </div>
      ))}
    {orderItems && orderItems.length > 0 ? (
      <h4 className="order__heading order__heading--total">
        Total Price:{' '}
        <span data-test-id="order-total">
          £{orderItems.reduce((curr, val) => curr + val.price, 0)}
        </span>
      </h4>
    ) : (
      <h4
        className="order__heading--nothing"
        data-test-id="order-heading-nothing"
      >
        It looks like you have an empty stomach, order now! 🌯🌯🌯
      </h4>
    )}
  </section>
);
