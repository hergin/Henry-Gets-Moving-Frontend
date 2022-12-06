import {render,screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login/Login';

jest.mock('../API');

describe('register button',()=>{
    test('takes to the right page',()=>{
        render(<Router><App/></Router>);
        fireEvent.click(screen.getAllByText('Login')[0]);
        fireEvent.click(screen.getByText('Register'));
        expect(global.window.location.pathname).toContain('/register');
    });

    it('exists',()=>{
        render(<Router><Login/></Router>);
        expect(screen.getByText("Register")).toBeInTheDocument();
    });
});

describe('login button',()=>{
    test.skip('logs in user',()=>{
        render(<Router><App/></Router>);
        // TODO: create test user
        fireEvent.click(screen.getAllByText('Login')[0]);
        const emailBox = screen.getByRole('input');
        fireEvent.click(emailBox);
        userEvent.type(emailBox, 'test@bsu.edu');
        fireEvent.click(screen.getByText('Login'));
        // TODO: make sure is logged in
    })

    test.skip('can\'t log-in non-existent user',()=>{
        global.fetch = jest.fn().mockResolvedValue({ok: false});
        window.alert = jest.fn()
        render(<Router><Login/></Router>);
        const emailBox = screen.getByRole('textbox');
        fireEvent.click(emailBox);
        userEvent.type(emailBox, 'non.existent@bsu.edu');
        fireEvent.click(screen.getAllByText('Login')[1]);
        expect(window.alert).toHaveBeenCalledWith();
    })
})