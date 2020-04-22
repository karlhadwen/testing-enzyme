import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { Order } from './components/Order';
import burritos from './data';

export const spiceEmoji = spice => '🌶️'.repeat(spice);

export const App = () => {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <main>
      <header>
        <h1 data-test-id="main-heading">Bart's Burritos</h1>
      </header>

      <div className="container">
        <Menu
          burritos={burritos}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
        <Order orderItems={orderItems} />
      </div>
    </main>
  );
};
