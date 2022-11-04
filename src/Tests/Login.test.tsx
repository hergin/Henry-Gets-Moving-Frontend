import {render,screen,fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login/Login';

describe('register button',()=>{
    test('takes to the right page',()=>{
        render(<Router><App/></Router>);
        fireEvent.click(screen.getByText('Login'));
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
        fireEvent.click(screen.getByText('Login'));
        const emailBox = screen.getByRole('input');
        fireEvent.click(emailBox);
        userEvent.type(emailBox, 'test@bsu.edu');
        fireEvent.click(screen.getByText('Login'));
        // TODO: make sure is logged in
    })
})