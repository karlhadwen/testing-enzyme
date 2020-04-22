import React from 'react';
import { mount } from 'enzyme';
import { Order } from '../components/Order';
import { twoBurritos } from '../fixtures';

describe('<Order />', () => {
  it('renders the order summary with two burriots', () => {
    const wrapper = mount(<Order orderItems={twoBurritos} />);

    expect(wrapper.find('[data-test-id="order-item"]').length).toBe(2);
    expect(wrapper.find('[data-test-id="order-name-1"]').text()).toBe(
      '🌯 Wet Burrito'
    );
    expect(wrapper.find('[data-test-id="order-spice-1"]').text()).toBe('🌶️');
    expect(wrapper.find('[data-test-id="order-price-1"]').text()).toBe('£5');
    expect(wrapper.find('[data-test-id="order-name-2"]').text()).toBe(
      '🌯 Poncho Burrito'
    );
    expect(wrapper.find('[data-test-id="order-spice-2"]').text()).toBe('🌶️🌶️');
    expect(wrapper.find('[data-test-id="order-price-2"]').text()).toBe('£7');
    expect(wrapper.find('[data-test-id="order-total"]').text()).toBe('£12');
  });

  it('renders the order summary with no burriots', () => {
    const wrapper = mount(<Order />);
    expect(wrapper.find('[data-test-id="order-heading-nothing"]').text()).toBe(
      'It looks like you have an empty stomach, order now! 🌯🌯🌯'
    );
  });
});
