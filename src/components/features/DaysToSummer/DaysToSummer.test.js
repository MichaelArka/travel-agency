import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  days: '.days',
};

const mockProps = {
  title: 'To Summer!',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component DaysToSummer', () => {
  it('should render component DaysToSummer', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.days)).toEqual(true);
  });
  it('should render component with props', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});