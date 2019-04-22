import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
    it('matches snapshot', () => {
        const data = {
           
        }
        
        expect(shallow(<App {...data}/>)).toMatchSnapshot();
    });

    
    // it('calls handleChangeValue prop when value changes', () => {
    //     const mockFunc = jest.fn();

    //     const data = {
    //         id: 'id',
    //         value: 'value',
    //         handleChangeValue: mockFunc
    //     }
    
        
    //     const component = shallow(<TextArea {...data}/>);

    //     const event = {
    //         currentTarget: {
    //             value: 'changed'
    //         }
    //     }

    //     component.find('textarea')
    //         .simulate('change', event);

    //     expect(mockFunc).toHaveBeenCalled();
    // });

    // it('calls handleChangeValue prop when value changes', () => {
    //     const mockFunc = jest.fn();

    //     const data = {
    //         id: 'id',
    //         value: 'value',
    //         handleChangeValue: mockFunc
    //     }
    
        
    //     const component = shallow(<TextArea {...data}/>);

    //     const event = {
    //         currentTarget: {
    //             value: 'changed'
    //         }
    //     }

    //     component.find('textarea')
    //         .simulate('change', event);

    //     expect(mockFunc).toHaveBeenCalledWith('changed');
    // });

});
