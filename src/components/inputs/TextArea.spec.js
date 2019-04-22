import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';

describe('TextArea', () => {
    it('matches snapshot', () => {
        const data = {
            id: 'id',
            value: 'value',
            handleChangeValue: jest.fn()
        }
        
        expect(shallow(<TextArea {...data}/>)).toMatchSnapshot();
    });

    it('calls handleChangeValue prop when value changes', () => {
        const mockFunc = jest.fn();

        const data = {
            id: 'id',
            value: 'value',
            handleChangeValue: mockFunc
        }
    
        
        const component = shallow(<TextArea {...data}/>);

        const event = {
            currentTarget: {
                value: 'changed'
            }
        }

        component.find('textarea')
            .simulate('change', event);

        expect(mockFunc).toHaveBeenCalled();
    });

    it('calls handleChangeValue prop when value changes', () => {
        const mockFunc = jest.fn();

        const data = {
            id: 'id',
            value: 'value',
            handleChangeValue: mockFunc
        }
    
        
        const component = shallow(<TextArea {...data}/>);

        const event = {
            currentTarget: {
                value: 'changed'
            }
        }

        component.find('textarea')
            .simulate('change', event);

        expect(mockFunc).toHaveBeenCalledWith('changed');
    });

    //Disabled functionality is not tested because it is part of the native textarea element
});
