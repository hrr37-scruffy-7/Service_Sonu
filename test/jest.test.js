let axios = require('axios');
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Desc from '../public/src/component/Desc.jsx';
let options = {
  headers: { 'access-control-allow-origin': '*' }
}
Enzyme.configure({adapter: new Adapter()});

test('check if price is correct', () => {
  return axios.get('http://localhost:5003/properties/23958461', options).then(response => {
    expect(response.data.price).toBe(496);
  })
})

test('if there is a div element', () => {
  const wrapper = mount(<Desc />);
  expect(wrapper.find('h3')).toHaveLength(1);
})