import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('matches snapshot', () => {
        const data = {
            id: 'id',
            label: 'label',
            handleClickButton: jest.fn()
        }
        
        expect(shallow(<Button {...data}/>)).toMatchSnapshot();
    });

    it('button click should call prop', () => {
        const mockClickFunction = jest.fn();

        const data = {
            id: 'id',
            label: 'label',
            handleClickButton: mockClickFunction
        }
    
        
        const component = shallow(<Button {...data}/>);

        component.find('button')
            .simulate('click');

        expect(mockClickFunction).toHaveBeenCalled();
    });
});
