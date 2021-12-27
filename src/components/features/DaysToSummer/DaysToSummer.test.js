import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Lorem ipsum',
  promoDescription: 'Lorem ipsum',
};

describe('Component HappyHourAd', () => {
  it('should render component HappyHourAd', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();

    // expect(component.exists(select.title)).toEqual(true);
    // expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should render component with props', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});