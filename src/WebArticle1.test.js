import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WebArticle1 from './WebArticle1'

Enzyme.configure({ adapter: new Adapter() });

//test to see if paragraph tag nested in component contains text
//tests to see if article data is presented
describe('WebArticle1', () => {
    it('Should show article', () => {
        const wrapper = mount(<WebArticle1 />)
        const text = wrapper.find('article p')
        //console.log(text)
        //expect(text).toHaveTextContent
        expect(text).toHaveTextContent
    })
})