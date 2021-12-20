import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  countdown: '.countdown',
};

describe('Component HappyHourAd', () => {
  it('should render component HappyHourAd', () => {
    const component = shallow(<HappyHourAd />);
    // expect(component.find('h3')).toBeCalledTimes(1); // <--- prawdziwy? a nie wywołany?
    expect(component).toBeTruthy();
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.countdown)).toEqual(true);
  });
});