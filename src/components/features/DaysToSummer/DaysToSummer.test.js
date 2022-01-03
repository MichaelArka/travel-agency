import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  days: '.days',
  getCountdownTime: 'getCountdownTime',
};

const mockProps = {
  title: 'To Summer!',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

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

const checkDateAtTime = (time, expectedDate) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2022-01-06T${time}.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.days).text();
    expect(renderedTime).toEqual(expectedDate);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDateAtTime('11:57:58', '165');
  // checkDateAtTime('11:59:59', '1');
  // checkDateAtTime('13:00:00', 23 * 60 * 60 + '');
});