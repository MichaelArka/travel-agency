import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct address', () => {
    const expectedAddress = '/trip/abc';
    const requiredName = 'name';
    const component = shallow(<TripSummary id={'abc'} name={requiredName} tags={[]} />)
    expect(component.find('Link').prop('to')).toEqual(expectedAddress);
    // console.log(component.debug());
  });

  it('image has correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('render props - name, cost, days', () => {
    const expectedPropName = 'name';
    const expectedPropCost = '$100';
    const expectedPropDays = 7;
    const component = shallow(<TripSummary name={expectedPropName} cost={expectedPropCost} days={expectedPropDays} tags={[]} />);

    expect(component.find('h3').text()).toEqual(expectedPropName);
    expect(component.find('span').at(0).text()).toEqual(expectedPropDays + ' days');
    expect(component.find('span').at(1).text()).toEqual('from ' + expectedPropCost);
  });

  it('render error when props is missing', () => {
    const idProps = 'abc';
    const imageProps = 'image.jpg';
    const nameProps = 'name';
    const costProps = '$100';
    const daysProps = 7;
    const component = shallow(<TripSummary id={idProps} image={imageProps} name={nameProps} cost={costProps} days={daysProps} tags={[]} />);

    expect(component).toBeTruthy();
  });

  it('render tags in array', () => {
    const requiredName = 'duck'
    const component = shallow(<TripSummary name={requiredName} tags={['one', 'two', 'three']} />);

    // expect(component.find('.tag').at(0).text()).toEqual('one' || 'two' || 'three');
    expect(component.find('.tag').at(0).text()).toEqual('one');
    expect(component.find('.tag').at(1).text()).toEqual('two');
    expect(component.find('.tag').at(2).text()).toEqual('three');
  });

  it('should not render tags if tags not exist', () => {
    const requiredName = 'duck'
    const component = shallow(<TripSummary name={requiredName} tags={[]} />);

    expect(component.find('.tag').exists()).toEqual(false);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});