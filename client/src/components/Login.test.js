import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Login from './Login';

describe('testing Login', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = render(<Login />)
    })

    // // this is for checking onChange event of usernmae value
    it('testing for username value', () => {

        expect(wrapper.getByTestId("username").value).toBe("");
        fireEvent.change(wrapper.getByTestId("username"), { target: { value: "john" } });
        expect(wrapper.getByTestId("username").value).toBe("john");
    })

    // this is for checking onChange event of password value 
    it('testing for password value', () => {

        expect(wrapper.getByTestId("password").value).toBe("");
        fireEvent.change(wrapper.getByTestId("password"), { target: { value: "1234" } });
        expect(wrapper.getByTestId("password").value).toBe("1234");
    })

    // this is for mock check of login button 
    it('testing for login value', async () => {

        expect(localStorage.getItem('token-type')).toBeFalsy();
        fireEvent.change(wrapper.getByTestId("username"), { target: { value: "john" } });
        fireEvent.change(wrapper.getByTestId("password"), { target: { value: "1234" } });

        await fireEvent.click(wrapper.getByTestId("login"));
        // mocking localstorage 
        Storage.prototype.getItem = jest.fn(() => 'Bearer');
        // const val = localStorage.getItem('token-type');
        // console.log(val);
        expect(localStorage.getItem('token-type')).toBe("Bearer");


    })
});
