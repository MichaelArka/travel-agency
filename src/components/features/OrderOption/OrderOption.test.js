import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import OrderOptionDate from './OrderOptionDate';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const expectedType = 'type';
    const expectedName = 'name';
    const expectedId = 'id';
    const expectedOrderOption = 'setOrderOption';
    const component = shallow(<OrderOption
       type={expectedType} 
       name={expectedName} 
       id={expectedId} 
       setOrderOption={expectedOrderOption}
       />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });

  it('should render component with props - "name"', () => {
    const expectedName = 'name';
    const component = shallow(<OrderOption name={expectedName} />);
    // expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.title').prop('name')).toEqual(expectedName);
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };
  
  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;

      beforeEach(() => {
        component = shallow(
          <OrderOption
            type={type}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });

      /* common tests */
      it('passes dummy test', () => {
        expect(1).toBe(1);
        console.log(component.debug());
      });
  
      /* type-specific tests */
      // eslint-disable-next-line default-case
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          break;
        }
      }
    });
  };

});