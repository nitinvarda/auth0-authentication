import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import SignUp from './SignUp';
import moxios from 'moxios'

describe('tests for Signup page', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = render(<SignUp />)
    })

    it('checking for username onChange event', () => {

        expect(wrapper.getByTestId('username').value).toBe("")
        fireEvent.change(wrapper.getByTestId("username"), { target: { value: "john" } });
        expect(wrapper.getByTestId('username').value).toBe("john")

    })
    it('checking for password onChange event', () => {

        expect(wrapper.getByTestId('password').value).toBe("")
        fireEvent.change(wrapper.getByTestId("password"), { target: { value: "1234" } });
        expect(wrapper.getByTestId('password').value).toBe("1234")

    })
    it('checking for signup button onClick event', () => {



        // console.log(wrapper.getByTestId('response').value)

        // expect(wrapper.getByTestId('response').value).toEqual('hello')

        fireEvent.change(wrapper.getByTestId("username"), { target: { value: "johng" } });
        fireEvent.change(wrapper.getByTestId("password"), { target: { value: "1234" } });
        fireEvent.click(wrapper.getByTestId('signup'))




        // expect(wrapper.getByTestId('response').value).toBe("success")

    })

});
