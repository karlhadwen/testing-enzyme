import React from 'react';
import { mount } from 'enzyme';
import { Menu } from '../components/Menu';
import { twoBurritos, currentOrderItems } from '../fixtures';

describe('<Menu />', () => {
  it('renders the menu with two burriots & one already in the basket', () => {
    const orderItems = currentOrderItems;
    const setOrderItems = jest.fn();

    const wrapper = mount(
      <Menu
        burritos={twoBurritos}
        orderItems={orderItems}
        setOrderItems={setOrderItems}
      />
    );

    const selector = wrapper.find('[data-test-id="add-item-1"]');

    expect(wrapper.find('[data-test-id="item"]').length).toBe(2);
    expect(wrapper.find('[data-test-id="spice-1"]').text()).toBe('🌶️');
    expect(wrapper.find('[data-test-id="item-heading-1"]').text()).toBe(
      'Wet Burrito'
    );
    expect(wrapper.find('[data-test-id="item-description-1"]').text()).toBe(
      'An amazing burrito!'
    );
    expect(wrapper.find('[data-test-id="image-1"]').prop('alt')).toBe(
      'Wet Burrito'
    );
    expect(wrapper.find('[data-test-id="image-1"]').prop('src')).toBe(
      '/images/wet-burrito.jpg'
    );

    expect(selector.text()).toBe('Add Wet Burrito | £5');
    wrapper.find('[data-test-id="add-item-1"]').simulate('click');

    expect(selector.text()).toBe('Remove Wet Burrito | £5');
    wrapper.find('[data-test-id="add-item-1"]').simulate('click');

    expect(selector.text()).toBe('Add Wet Burrito | £5');
  });
});
