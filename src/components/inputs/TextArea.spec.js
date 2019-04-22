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
});
