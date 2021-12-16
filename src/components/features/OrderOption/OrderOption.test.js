import React from 'react';
import {render, shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from "react-datepicker";

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
    const requiredName = 'name';
    const component = shallow(<OrderOption name={requiredName} />);
    expect(component.isEmptyRender()).toEqual(true);
  });

  it('should render component with props - "name"', () => {
    const expectedName = 'name';
    const expectedType = 'icons';
    const component = shallow(<OrderOption type={expectedType} name={expectedName} />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };

  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };
  
  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };
  
  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;
  
  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */

      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption; /* 1 */

      beforeEach(() => {
        mockSetOrderOption = jest.fn(); /* 2 */
        component = shallow(
          <OrderOption
            type={type}
            setOrderOption={mockSetOrderOption} /* 3 */
            {...mockProps}
            {...mockPropsForType[type]}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });

      /* common tests */
      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
      });
  
      /* type-specific tests */

      // eslint-disable-next-line default-case
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);
          
            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);
          
            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }

        case 'icons': {
          it('contains simulated click on div class ".icon"', () => {
            const component = renderedSubcomponent.find('div .icon');
            // console.log(component.debug());
            expect(component.length).toBe(2);
          });
          it('should run setOrderOption function on click', () => {
            
            renderedSubcomponent.find('.icon').last().simulate('click');
            // renderedSubcomponent.find('div .icon').at(1).simulate('click');
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }

        case 'checkboxes': {
          it('contains run setOrderOption function on change when value is checked: true', () => {
            const component = renderedSubcomponent.find('input');
            // console.log(component.debug());
            expect(component.length).toBe(2);
          });
          // skip
          it('should run setOrderOption function on change.', () => { 
            renderedSubcomponent.find('input').at(1).simulate('change', {currentTarget: {checked: true}});
            // console.log(component.debug());
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
          });
          break;
        }

        case 'number': {
          it('contains input and options', () => {
          
            const input = renderedSubcomponent.find('input');
            expect(input.prop('type')).toBe('number');
            expect(input.prop('value')).toBe(mockPropsForType.number.currentValue);
            expect(input.prop('min')).toBe(mockProps.limits.min);
            expect(input.prop('max')).toBe(mockProps.limits.max);
          });

          it('should run setOrderOption function on change..', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
          });
          break;
        }

        case 'text': {
          it('contains input', () => {
            const component = renderedSubcomponent.find('.input');
            expect(component.length).toBe(1);
          });

          it('should run setOrderOption function on change...', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }

        case 'date': {
          it('contains DatePicker', () => {
            const component = renderedSubcomponent.find(DatePicker);
            expect(component.length).toBe(1);
          });
          it('should run setOrderOption function on change....', () => {
            renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          });
          break;
        }

      }
    });
  };

});