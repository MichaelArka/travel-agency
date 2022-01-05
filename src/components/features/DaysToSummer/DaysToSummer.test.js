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

const checkDaysAtDate = (date, expectedDays) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T11:59:59.555Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.days).text();
    expect(renderedTime).toEqual(expectedDays);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDaysAtDate('2022-01-06', '165 Days left');
  checkDaysAtDate('2022-07-23', '');
  checkDaysAtDate('2022-06-19', '1 Day left');
  checkDaysAtDate('2023-10-25', '');
});