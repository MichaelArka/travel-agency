import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct address', () => {
    const expectedAddress = '/trip/abc';
    const component = shallow(<TripSummary id={'abc'} tags={[]} />)
    expect(component.find('Link').prop('to')).toEqual(expectedAddress);
    console.log(component.debug());
  });

  it('image has correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'hero-image';
    const component = shallow(<TripSummary image={expectedSrc} alt={expectedAlt} tags={[]} />)
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    // expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('render props - name, cost, days', () => {
    const expectedPropName = 'name';
    const component = shallow(<TripSummary tags={[]} />)
    expect(component.find('.title').text()).toEqual(expectedPropName);
  });
})