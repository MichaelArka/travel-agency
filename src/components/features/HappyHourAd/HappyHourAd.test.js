import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
  test: '.test',
};

const mockProps = {
  title: 'Happy Hour!',
  promoDescription: 'promoDescription',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Component HappyHourAd', () => {
  it('should render component HappyHourAd', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();

    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should render component with props', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
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

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    
    global.Date = mockDate(newTime.getTime());
    jest.advanceTimersByTime(delaySeconds * 1000);
    jest.useFakeTimers();
    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '122');
  checkDescriptionAfterTime('11:59:58', 2, '2');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 23 * 60 * 60 + '');
});

// describe('Component HappyHourAd with promoDescription text', () => {
//   checkDescriptionAtTime('11:59:59', mockProps.promoDescription);
//   checkDescriptionAtTime('12:00:00', mockProps.promoDescription);
//   checkDescriptionAtTime('13:00:00', mockProps.promoDescription);
// });

describe('Component HappyHourAd with promotion text', () => {
  checkDescriptionAfterTime('11:57:58', 2, '122');
  checkDescriptionAfterTime('11:59:58', 2, '2');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 23 * 60 * 60 + '');
});

// Example
const checkTestAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedText = component.find(select.test).text();
    expect(renderedText).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with promoDescription text', () => {
  checkTestAtTime('11:59:59', mockProps.promoDescription);
  checkTestAtTime('12:00:00', mockProps.promoDescription);
  checkTestAtTime('13:00:00', mockProps.promoDescription);
});